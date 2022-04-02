import ACTION_TYPE from "../ActionType/actionType";
import axios from "axios";

const headers = {
    "Content-type": "application/json",
};

// user sign up
export const userSignUp = function (data) {
    return async function (dispatch) {
        try {
            const userRef = await axios.post(`/user/singUp`, { data }, { headers });

            if (userRef) {
                window.localStorage.setItem("userData", JSON.stringify(userRef.data));

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

// user login in
export const userLogIn = function (data) {
    return async function (dispatch) {
        try {
            const userLoginRef = await axios.post("/user/logIn", { data }, { headers });

            if (userLoginRef) {
                window.localStorage.setItem("userData", JSON.stringify(userLoginRef.data));

                dispatch({
                    type: ACTION_TYPE.USER_SIGNUP,
                    payload: userLoginRef.data,
                });
            }
        } catch (err) {
            console.log(err);
        }
    };
};

// user forget password
export const userForgetPassword = function (data) {
    return async function (dispatch) {
        try {
            const forgetPasswordRef = await axios.post("/user/forgetPassword", { data }, { headers });

            console.log(forgetPasswordRef);
        } catch (err) {
            console.log(err);
        }
    };
};

// user reset password
export const userResetPasswordRequest = function (data) {
    return async function (dispatch) {
        try {
            const userRef = await axios.post("/user/reset-password", { data }, { headers });

            if (userRef) {
                dispatch({
                    type: ACTION_TYPE.PASSWORD_RESET_REQUEST,
                    payload: userRef.data,
                });
            }
        } catch (err) {
            console.log(err);
        }
    };
};

// logout user
export const logOutUser = function (data) {
    return {
        type: ACTION_TYPE.USER_LOG_OUT,
        payload: data,
    };
};

// show profile popup
export const showProfilePopup = function (data) {
    return {
        type: ACTION_TYPE.SHOW_PROFILE_CARD_POPUP,
        payload: data,
    };
};

// // upload music
export const uploadMusic = function (data) {
    return {
        type: ACTION_TYPE.FILE_UPLOAD_VALUE,
        payload: data,
    };
};

// get all music from the databse
export const getAllMusic = function () {
    return async function (dispatch) {
        try {
            const allMusicList = await axios.post("/music/getAllMusic");

            if (allMusicList) {
                dispatch({
                    type: ACTION_TYPE.ALL_MUSIC_LIST,
                    payload: allMusicList.data,
                });

                dispatch({
                    type: ACTION_TYPE.ALL_SONGS_HANDLER,
                    payload: allMusicList.data,
                });
            }
        } catch (err) {
            console.log(err);
        }
    };
};

// selected music
export const selectedMusic = function (data) {
    return {
        type: ACTION_TYPE.SELECTED_MUSIC,
        payload: data,
    };
};

// play music
export const isPlayHandler = function (data) {
    return {
        type: ACTION_TYPE.ISPLAY,
        payload: data,
    };
};

// handler for music card buttons
export const playButtonCartELm = function (data) {
    return {
        type: ACTION_TYPE.CART_PLAY_BUTTON,
        payload: data,
    };
};

// show the music prev card
export const showTheMusicPrev = function (data) {
    return {
        type: ACTION_TYPE.SHOW_MUSIC_CART_PREV,
        payload: data,
    };
};

export const prevImageInfoHandler = function (data) {
    return {
        type: ACTION_TYPE.PREV_IMAGE_INFO,
        payload: data,
    };
};

// song like
export const songLike = function (data) {
    return {
        type: ACTION_TYPE.SONG_LIKE,
        payload: data,
    };
};

// song like button
export const songLikeHandler = function (data) {
    return {
        type: ACTION_TYPE.SONG_LIKE_HANDLER,
        payload: data,
    };
};

// all songs handler
export const allSongsHandler = function (data) {
    return {
        type: ACTION_TYPE.ALL_SONGS_HANDLER,
        payload: data,
    };
};

export const SongsNavigator = function (data) {
    return {
        type: ACTION_TYPE.SONGS_NAVIGATOR,
        payload: data,
    };
};

// library songs play
export const librarySong = function (data) {
    return {
        type: ACTION_TYPE.LIBRARY_SONG_HANDLER,
        payload: data,
    };
};
