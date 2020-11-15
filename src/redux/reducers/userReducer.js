import actionTypes from "../actions/actionTypes";

export default function userReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.LOAD_USERS:
            return;
        default:
            return state;
    }
}
