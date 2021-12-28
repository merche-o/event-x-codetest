import * as actionTypes from "../action/actionTypes"

const initialSearchState: SearchState = {
  search: {
    currentValue: "",
  } as SearchData
}
export const reducerSearch = (
  state: SearchState = initialSearchState,
  action: SearchAction
): SearchState => {
  switch (action.type) {
    case actionTypes.LAUNCH_SEARCH:
      return {
        ...state,
        search: {
          currentValue: action.data!.currentValue,
        }
      }
  }
  return state
}
