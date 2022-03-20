import ACTION_TYPE from '../ActionType/actionType';

const initalState = {
    UserLoginStatus: null,
    UserResetPassword: null,
};

const userReducer = function (state = initalState, action) {
    switch (action.type) {
        case ACTION_TYPE.USER_SIGNUP:
            return {
                ...state,
                UserLoginStatus: action.payload,
            };

        case ACTION_TYPE.PASSWORD_RESET_REQUEST:
            return {
                ...state,
                UserResetPassword: action.payload,
            };

        default:
            return {
                ...state,
            };
    }
};

export default userReducer;
