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
              if (tmp != undefined) {
                if (_.isEqual(tmp, action.data)) {
                 return state
                } else {
                    return {
                        ...state,
                        data: state.data.map(x => x.base  == coinStringTable[action.request][0] ?
                          {...x, price : action.data.price, volume : action.data.volume, change: action.data.change} : x)
                    }
                }
              } else {
               return {
                ...state,
                data: [...state.data, action.data],
                }
            }
    }
    return state
  }