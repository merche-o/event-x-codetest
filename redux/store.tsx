import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { reducerCryptoData } from "./reducer/cryptoReducer"
import { reducerSearch } from "./reducer/searchReducer"
import { GlobalState } from "./type/global"

const rootReducer = combineReducers<GlobalState>({
    cryptoDataState: reducerCryptoData,
    searchData: reducerSearch,

})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store