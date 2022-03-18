import ACTION_TYPE from '../ActionType/actionType';

const initalState = {
    UserLoginStatus: null,
};

const userReducer = function (state = initalState, action) {
    switch (action.type) {
        case ACTION_TYPE.USER_SIGNUP:
            return {
                ...state,
                UserLoginStatus: action.payload,
            };

        default:
            return {
                ...state,
            };
    }
};

export default userReducer;
