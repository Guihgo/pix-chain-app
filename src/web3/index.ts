import { EthereumCode } from "emvqrcode-tools"

import Web3 from "web3"
import { Account } from "web3-core"

export default class WalletHelper {

    public explorerUrl = new URL("https://testnet.bscscan.com/")
    public web3!: Web3
    public account!: Account

    constructor(protected privateKey: string) {
        // const temp = EthereumCode.parse("00020126930023ETHEREUM.BLOCKCHAIN.PIX0146https://data-seed-prebsc-1-s3.binance.org:85450212Some message5918Guilherme Henrique6009São Paulo6109086300000A02890101102420xAB518cD35e0Cc361Fe7687C3CF6b81147AA62d7403420xbF78a3e6e33b58a016A30EfC3C56cF8FCDB7e6120402970515171000000000000060521000071115000000000A81380xa9059cbb000000000000000000000000ab518cd35e0cc361fe7687c3cf6b81147aa62d740000000000000000000000000000000000000000000000008ac7230489e800006304B914")
        // console.log(temp, Web3.version)

        this.web3 = new Web3(new Web3.providers.HttpProvider("https://data-seed-prebsc-1-s3.binance.org:8545"))

        this.account = this.web3.eth.accounts.privateKeyToAccount(privateKey)
    }

    getAddress()  {
        if(! this.account) throw new Error("Account not setup")
        return this.account.address
    }

    shortAddress(address: string) {
        return `${address.slice(0, 6)}...${address.slice(-4)}`
    }

    getExplorerAddressLink(address: string) {
        return `${this.explorerUrl.origin}/address/${address}`
    }

    async getBalance(erc20ContractAddress?: string) : Promise<string> {
        if (!erc20ContractAddress) {
            const balance = await this.web3.eth.getBalance(this.getAddress())
            console.log(balance)
            return balance
        }

        throw new Error("getBalance of erc20ContractAddress not implemmented yet")
    }


}