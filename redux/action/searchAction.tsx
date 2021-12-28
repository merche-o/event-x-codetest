import * as actionTypes from "./actionTypes"

export function launchSearch(search: string) {
    const action: SearchAction = {
        type: actionTypes.LAUNCH_SEARCH,
        value: search
    }
    return searchData(action)
}


export function searchData(searchData: SearchAction) {
    return (dispatch: DispatchSearch) => {
        if (searchData.data == null) {
            searchData.data = {
                currentValue: searchData.value,
            } as SearchData
        } else {
             searchData.data!.currentValue = searchData.value
        }
        dispatch(searchData)

    }
}