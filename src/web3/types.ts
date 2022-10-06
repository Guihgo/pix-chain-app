export enum EUnitsETH {
    noether = "noether",
    wei = "wei",
    kwei = "kwei",
    Kwei = "Kwei",
    babbage = "babbage",
    femtoether = "femtoether",
    mwei = "mwei",
    Mwei = "Mwei",
    lovelace = "lovelace",
    picoether = "picoether",
    gwei = "gwei",
    Gwei = "Gwei",
    shannon = "shannon",
    nanoether = "nanoether",
    nano = "nano",
    szabo = "szabo",
    microether = "microether",
    micro = "micro",
    finney = "finney",
    milliether = "milliether",
    milli = "milli",
    ether = "ether",
    kether = "kether",
    grand = "grand",
    mether = "mether",
    gether = "gether",
    tether = "tether",
}

export enum ECurrencySymbol {
    BNB = "BNB",
    TBNB = "TBNB",
    PIX_COIN = "PIX"
}
export interface IToken {
    address: string,
    abi: any
}
export interface ICurrency {
    symbol: ECurrencySymbol,
    decimals: number,
    decimalsUnit: EUnitsETH,
    token?: IToken
}
export type TCurrency = {
    [currencySymbol in keyof typeof ECurrencySymbol]: ICurrency
}
export const CURRENCY: TCurrency = {
    BNB: {
        decimals: 18,
        decimalsUnit: EUnitsETH.ether,
        symbol: ECurrencySymbol.BNB
    },
    TBNB: {
        decimals: 18,
        decimalsUnit: EUnitsETH.ether,
        symbol: ECurrencySymbol.TBNB
    },
    PIX_COIN: {
        decimals: 18,
        decimalsUnit: EUnitsETH.ether,
        symbol: ECurrencySymbol.PIX_COIN,
        token: {
            address: "0xee5a767bdb73fafd4bb50317a8a78901a81547f4",
            abi: [{ "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }]
        }
    },
}

export enum ENetworkNameEnviroment {
    BSC_MAINNET = "bsc-mainnet",
    BSC_TESTNET = "bsc-testnet"
}
export interface INetwork {
    nameEnviroment: ENetworkNameEnviroment,
    providerHost: string,
    coinbaseSymbol: ICurrency,
    explorerUrl: URL,
    chainID: number
}
export type TNetwork = {
    [networkNameID in keyof typeof ENetworkNameEnviroment]: INetwork
}

export const NETWORKS: TNetwork = {
    BSC_MAINNET: {
        nameEnviroment: ENetworkNameEnviroment.BSC_MAINNET,
        providerHost: "https://bsc-dataseed.binance.org/",
        coinbaseSymbol: CURRENCY.BNB,
        chainID: 56,
        explorerUrl: new URL("https://bscscan.com/")
    },
    BSC_TESTNET: {
        nameEnviroment: ENetworkNameEnviroment.BSC_TESTNET,
        providerHost: "https://data-seed-prebsc-1-s3.binance.org:8545",
        coinbaseSymbol: CURRENCY.TBNB,
        chainID: 97,
        explorerUrl: new URL("https://testnet.bscscan.com/")
    }
}

