import ACTION_TYPE from '../ActionType/actionType';
import axios from 'axios';

const headers = {
    'Content-type': 'application/json',
};

// user sign up
export const userSignUp = function (data) {
    return async function (dispatch) {
        try {
            const userRef = await axios.post(`/user/singUp`, { data }, { headers });

            if (userRef) {
                window.localStorage.setItem('userData', JSON.stringify(userRef.data));

                dispatch({
                    type: ACTION_TYPE.USER_SIGNUP,
                    payload: userRef.data,
                });
            }
        } catch (err) {
            console.log(err);
        }
    };
};

// already present
export const userPresent = function (data) {
    return {
        type: ACTION_TYPE.USER_SIGNUP,
        payload: data,
    };
};
