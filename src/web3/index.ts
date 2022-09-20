import { EthereumCode } from "emvqrcode-tools"
import Web3 from "web3"
export default class Web3Helper {

    constructor(protected privateKey: string) {
        const temp = EthereumCode.parse("00020126930023ETHEREUM.BLOCKCHAIN.PIX0146https://data-seed-prebsc-1-s3.binance.org:85450212Some message5918Guilherme Henrique6009São Paulo6109086300000A02890101102420xAB518cD35e0Cc361Fe7687C3CF6b81147AA62d7403420xbF78a3e6e33b58a016A30EfC3C56cF8FCDB7e6120402970515171000000000000060521000071115000000000A81380xa9059cbb000000000000000000000000ab518cd35e0cc361fe7687c3cf6b81147aa62d740000000000000000000000000000000000000000000000008ac7230489e800006304B914")
        console.log(temp, Web3.version)
    }

    static getAccount() {

    }

    static getBalance(erc20Contract?: string) {

    }

}