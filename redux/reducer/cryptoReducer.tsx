import { coinStringTable } from "../../env/translationTable";
import * as actionTypes from "../action/actionTypes"
import { CryptoDataAction, CryptoDataState } from "../state/cryptoStateData"
var _ = require('lodash/lang');


const initialItemData: CryptoDataState = {
    data: []
  }

  export const reducerCryptoData = (
    state: CryptoDataState = initialItemData,
    action: CryptoDataAction
  ): CryptoDataState => {
    switch (action.type) {
      case actionTypes.GET_CRYPTO_DATA:
       
              var tmp = state.data.find(x => x.base === coinStringTable[action.request][0])
              if (tmp) {
                if (_.isEqual(tmp, action.data)) {
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
    }
    return state
  }