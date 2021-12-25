import * as actionTypes from "../action/actionTypes"
import { CryptoDataAction, CryptoDataState } from "../state/cryptoStateData"

const initialItemData: CryptoDataState = {
    data: undefined
  }

  export const reducerCryptoData = (
    state: CryptoDataState = initialItemData,
    action: CryptoDataAction
  ): CryptoDataState => {
    switch (action.type) {
      case actionTypes.GET_CRYPTO_DATA:
        return {
          ...state,
          data: action.data,
        }
    }
    return state
  }