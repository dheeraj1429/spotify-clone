import ACTION_TYPE from "../ActionType/actionType";

const initalState = {
    UserLoginStatus: null,
    UserResetPassword: null,
    ShowProfilePopUp: false,
    UploadMusicStatus: null,
    AllMusicList: null,
    FileUploadData: null,
    SelectedMusic: null,
    IsPlay: false,
    CartButtonElm: null,
    ShowMusicPrevCart: false,
    PrevImageInfo: null,
    SongLikeStore: [],
    SongLikeButton: false,
    SongsMusicArrayList: null,
    LibrarySongsPlay: false,
    SongsNavigator: false,
};

const grounSongLike = function (item, addtoLike) {
    const present = item.find((el) => el._id === addtoLike._id);

    if (present) {
        return item.filter((el) => el._id !== addtoLike._id);
    }

    return item.concat(addtoLike);
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

        case ACTION_TYPE.USER_LOG_OUT:
            return {
                ...state,
                UserLoginStatus: action.payload,
            };

        case ACTION_TYPE.SHOW_PROFILE_CARD_POPUP:
            return {
                ...state,
                ShowProfilePopUp: action.payload,
            };

        case ACTION_TYPE.MUSIC_UPLOAD_INFO:
            return {
                ...state,
                UploadMusicStatus: action.payload,
            };

        case ACTION_TYPE.ALL_MUSIC_LIST:
            return {
                ...state,
                AllMusicList: action.payload,
            };

        case ACTION_TYPE.FILE_UPLOAD_VALUE:
            return {
                ...state,
                FileUploadData: action.payload,
            };

        case ACTION_TYPE.SELECTED_MUSIC:
            return {
                ...state,
                SelectedMusic: action.payload,
            };

        case ACTION_TYPE.ISPLAY:
            return {
                ...state,
                IsPlay: action.payload,
            };

        case ACTION_TYPE.CART_PLAY_BUTTON:
            return {
                ...state,
                CartButtonElm: action.payload,
            };

        case ACTION_TYPE.SHOW_MUSIC_CART_PREV:
            return {
                ...state,
                ShowMusicPrevCart: action.payload,
            };

        case ACTION_TYPE.PREV_IMAGE_INFO:
            return {
                ...state,
                PrevImageInfo: action.payload,
            };

        case ACTION_TYPE.SONG_LIKE:
            return {
                ...state,
                SongLikeStore: grounSongLike(state.SongLikeStore, action.payload),
            };

        case ACTION_TYPE.ALL_SONGS_HANDLER:
            return {
                ...state,
                SongsMusicArrayList: action.payload,
            };

        case ACTION_TYPE.LIBRARY_SONG_HANDLER:
            return {
                ...state,
                LibrarySongsPlay: action.payload,
            };

        case ACTION_TYPE.SONGS_NAVIGATOR:
            return {
                ...state,
                SongsNavigator: action.payload,
            };

        default:
            return {
                ...state,
            };
    }
};

export default userReducer;
