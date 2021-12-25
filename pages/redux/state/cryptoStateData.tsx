import { CryptoData } from "../../model/cryptoData"

export type CryptoDataAction = {
    type: string,
    data?:  CryptoData[]
}

export type CryptoDataState = {
    data?:  CryptoData[]
}

export type DispatchCrytoData = (args: CryptoDataAction) => CryptoDataAction
