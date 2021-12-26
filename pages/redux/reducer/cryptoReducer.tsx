import { coinStringTable } from "../../env/translationTable";
import * as actionTypes from "../action/actionTypes"
import { CryptoDataAction, CryptoDataState } from "../state/cryptoStateData"
const util = require('util');


const initialItemData: CryptoDataState = {
    data: undefined
  }

  export const reducerCryptoData = (
    state: CryptoDataState = initialItemData,
    action: CryptoDataAction
  ): CryptoDataState => {
    switch (action.type) {
      case actionTypes.GET_CRYPTO_DATA:
          if (state.data) {
              var tmp = state.data.find(x => x.base === coinStringTable[action.request][0])
              if (tmp) {
                if (util.isDeepStrictEqual(tmp, action.data)) {
                    return {
                        ...state,
                    }
                } else {
                    var index = state.data.findIndex(x => x.base === coinStringTable[action.request][0])
                    state.data[index] = action.data
                    return {
                        ...state,
                        data: state.data
                    }
                }
              } else {
               return {
                ...state,
                data: state.data.concat(action.data),
                }
            }
        } else {
            return {
                ...state,
                data: [action.data],
                }
        }
    }
    return state
  }