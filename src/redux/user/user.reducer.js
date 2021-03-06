import UserActionTypes from "./user.types"

const INITIAL_STATE = {
    currentUcurrentUserser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload
            }
        case UserActionTypes.SIGN_IN_FAILIURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default userReducer;