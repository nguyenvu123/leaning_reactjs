
import * as types from './../constants/actionType'

var initState = [];

var MyReducer = (state = initState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        default: return state;

    }
    return state;

}
export default MyReducer;