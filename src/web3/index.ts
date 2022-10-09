import { EthereumCode, IEthereumCodeParams } from "emvqrcode-tools"

import Web3 from "web3"
import { Account } from "web3-core"
import { toWei, toBN, fromWei } from "web3-utils"
import BN from "bn.js"
import { CURRENCY, ECurrencySymbol, EUnitsETH, ICurrency, INetwork, NETWORKS } from "./types"
import { shortLongString } from "./utils"

interface IBalance { amount: string, symbol: ECurrencySymbol }

interface ISignInvoice {
    ethereumCodeParams: IEthereumCodeParams,
    rawTransactionSigned: string,
    transactionHash: string,
    from: string,
    to: string,
    amount: string,
    symbol: ECurrencySymbol
}
export default class WalletHelper {

    private network: INetwork = NETWORKS.BSC_TESTNET
    public web3!: Web3
    public account!: Account

    constructor(protected privateKey: string, ethNetwork?: INetwork) {
        // const temp = EthereumCode.parse("00020126930023ETHEREUM.BLOCKCHAIN.PIX0146https://data-seed-prebsc-1-s3.binance.org:85450212Some message5918Guilherme Henrique6009São Paulo6109086300000A02890101102420xAB518cD35e0Cc361Fe7687C3CF6b81147AA62d7403420xbF78a3e6e33b58a016A30EfC3C56cF8FCDB7e6120402970515171000000000000060521000071115000000000A81380xa9059cbb000000000000000000000000ab518cd35e0cc361fe7687c3cf6b81147aa62d740000000000000000000000000000000000000000000000008ac7230489e800006304B914")
        // console.log(temp, Web3.version)
        if (ethNetwork) this.network = ethNetwork
        this.web3 = new Web3(new Web3.providers.HttpProvider(this.network.providerHost))

        this.account = this.web3.eth.accounts.privateKeyToAccount(privateKey)
    }

    getAddress() {
        if (!this.account) throw new Error("Account not setup")
        return this.account.address
    }

    shortAddress(address?: string) {
        return shortLongString(address || this.getAddress())
    }

    getExplorerAddressLink(address: string) {
        return `${this.network.explorerUrl.origin}/address/${address}`
    }

    getCurrencyKeyByValue(currencySymbol?: ECurrencySymbol): ICurrency {
        const keyCurrencySymbol = Object.keys(ECurrencySymbol).find((key) => (ECurrencySymbol[key as keyof typeof ECurrencySymbol] === currencySymbol)) as keyof typeof ECurrencySymbol
        return CURRENCY[keyCurrencySymbol]
    }

    async getGasPrice(speedUp = "5"): Promise<BN> {
        return toBN(await this.web3.eth.getGasPrice().catch(e => toWei("10", EUnitsETH.Gwei))).add(toBN(toWei(speedUp, EUnitsETH.Gwei)))
    }

    async getBalance(currencySymbol?: ECurrencySymbol): Promise<IBalance> {
        if (!currencySymbol || this.network.coinbaseSymbol.symbol === currencySymbol) {
            const balance = await this.web3.eth.getBalance(this.getAddress())
            const amount = this.web3.utils.fromWei(balance, this.network.coinbaseSymbol.decimalsUnit)
            return {
                amount,
                symbol: this.network.coinbaseSymbol.symbol
            }
        }

        /* Get erc20 token balance */
        const currency = this.getCurrencyKeyByValue(currencySymbol)
        if (!currency.token) throw new Error(`${currency.symbol} isnt an token or coinbase of ${this.network.nameEnviroment} network.`)

        const erc20Contract = new this.web3.eth.Contract(currency.token.abi, currency.token.address)
        const balance = await erc20Contract.methods.balanceOf(this.getAddress()).call()
        const amount = this.web3.utils.fromWei(balance, currency.decimalsUnit)
        return {
            amount,
            symbol: currency.symbol
        }
    }

    async createInvoice(fromAddress: string, amount: string, currencySymbol?: ECurrencySymbol): Promise<string> {

        if (!currencySymbol) currencySymbol = this.network.coinbaseSymbol.symbol
        const currency = this.getCurrencyKeyByValue(currencySymbol)

        amount = amount.replaceAll(",", ".")

        let to = this.getAddress()
        let data = ""
        let value = toWei(amount, currency.decimalsUnit)
        if (currency.token) {
            const erc20Contract = new this.web3.eth.Contract(currency.token.abi, currency.token.address)
            data = erc20Contract.methods.transfer(this.getAddress(), value).encodeABI()
            value = "0";
            to = currency.token.address
        }

        const transaction: IEthereumCodeParams["transaction"] = {
            nonce: await this.web3.eth.getTransactionCount(fromAddress, "pending") || 0,
            from: fromAddress,
            to,
            value,
            gasPrice: await this.getGasPrice(),
            data,
        }

        const estimateGas = await this.web3.eth.estimateGas(transaction)
        transaction.gas = estimateGas
        transaction.chainId = this.network.chainID

        const ethereumCode = new EthereumCode({
            transaction,
            provider: {
                host: this.network.providerHost
            }
        })

        return ethereumCode.get();
    }

    async signInvoice(ethCode: string): Promise<ISignInvoice> {
        const ethParsed = EthereumCode.parse(ethCode)

        let to = ethParsed.transaction.to || ""
        let amount = fromWei(ethParsed.transaction.value as string, this.network.coinbaseSymbol.decimalsUnit)
        let symbol = this.network.coinbaseSymbol.symbol

        if (ethParsed.transaction.data) {
            const currency = Object.keys(CURRENCY).map((cKey) => {
                const currency = CURRENCY[cKey as keyof typeof ECurrencySymbol]
                if (!currency.token || currency.token.address.toLocaleLowerCase() !== ethParsed.transaction.to?.toLocaleLowerCase()) return null
                return currency
            }).filter(c => c !== null)[0]
            if (!currency) throw new Error(`Smart contract ${ethParsed.transaction.to} not implemented`)

            symbol = currency.symbol

            const ethTransactionDataParsed = EthereumCode.parse(ethCode, currency.token!.abi)

            if (ethTransactionDataParsed.transaction.data["name"].toLocaleLowerCase() === "transfer") {
                const params = ethTransactionDataParsed.transaction.data["params"]
                for (const k of Object.keys(params)) {
                    switch(params[k]["name"].toLocaleLowerCase()) {
                        case "to":
                            to = params[k]["value"]
                            break
                        case "amount":
                            amount = fromWei(params[k]["value"], currency.decimalsUnit)
                            break
                    }
                }
            }
        }

        /* Sign */
        const { rawTransaction: rawTransactionSigned, transactionHash } = await this.account.signTransaction(ethParsed.transaction)
        if (!rawTransactionSigned || !transactionHash) throw new Error(`Can't sign transaction`)

        return {
            ethereumCodeParams: ethParsed,
            rawTransactionSigned,
            transactionHash,
            from: ethParsed.transaction.from as string,
            to,
            amount,
            symbol
        }
    }

    async sendSignedTransaction(rawTransactionSigned: string) : Promise<any> {
        const result = await this.web3.eth.sendSignedTransaction(rawTransactionSigned, (r) => console.log(r))
        console.log(result)
        return result
    }



}

