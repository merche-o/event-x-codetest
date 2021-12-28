import * as actionTypes from "../action/actionTypes"

const initialSearchState: SearchState = {
  search: {
    currentValue: "",
    history: [""]
  } as SearchData
}
export const reducerSearch = (
  state: SearchState = initialSearchState,
  action: SearchAction
): SearchState => {
  switch (action.type) {
    case actionTypes.LAUNCH_SEARCH:
      state.search.history.push(action.data!.currentValue)
      return {
        ...state,
        search: {
          currentValue: action.data!.currentValue,
          history: state.search.history
        }
      }
  }
  return state
}
