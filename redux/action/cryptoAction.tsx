import { BASE_URL } from "../../env/env"
import { CryptoData } from "../../model/cryptoData"
import { DispatchCrytoData, CryptoDataAction} from "../state/cryptoStateData"
import * as actionTypes from "./actionTypes"

export function getCryptos(request:string) {
    const action: CryptoDataAction = {
        type: actionTypes.GET_CRYPTO_DATA,
        request : request
    }
    return getCryptosData(action)
}

export function getCryptosData(cryptoAction : CryptoDataAction) {
    return (dispatch: DispatchCrytoData) => {
        fetch(BASE_URL + cryptoAction.request, {
          "method": "GET",
        })
          .then(response => response.json())
          .then(response => {
            cryptoAction.data = response["ticker"] as CryptoData    
            dispatch(cryptoAction)
          })
          .catch(err => {
            console.log(err);
          });
      }
    }