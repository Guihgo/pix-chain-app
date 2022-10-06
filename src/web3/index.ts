import { EthereumCode } from "emvqrcode-tools"

import Web3 from "web3"
import { Account } from "web3-core"
import { Contract } from "web3-eth-contract"
import { CURRENCY, ECurrencySymbol, INetwork, NETWORKS } from "./types"
import { shortLongString } from "./utils"

interface IBalance { amount: string, symbol: ECurrencySymbol }
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
        const keyCurrencySymbol = Object.keys(ECurrencySymbol).find((key) => (ECurrencySymbol[key as keyof typeof ECurrencySymbol] === currencySymbol)) as keyof typeof ECurrencySymbol
        const currency = CURRENCY[keyCurrencySymbol]
        if (!currency.token) throw new Error(`${currency.symbol} isnt an token or coinbase of ${this.network.nameEnviroment} network.`)

        const erc20Contract = new this.web3.eth.Contract(currency.token.abi, currency.token.address)
        const balance = await erc20Contract.methods.balanceOf(this.getAddress()).call()
        const amount = this.web3.utils.fromWei(balance, currency.decimalsUnit)
        return {
            amount,
            symbol: currency.symbol
        }
    }


}