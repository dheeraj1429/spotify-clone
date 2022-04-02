import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { songLike, songLikeHandler } from "../../Redux/Action/action";
import "./AudioExtraOptionComponent.css";

function AudioExtraOptionComponent(data) {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.userStoreData);
    const [LikeSongs, setLikeSongs] = useState(false);

    const LikeSongHandler = function (e) {
        dispatch(songLike(data.data));
    };

    useEffect(() => {
        if (data) {
            if (selector.SongLikeStore.find((el) => el._id === data.data._id)) {
                setLikeSongs(true);
            } else {
                setLikeSongs(false);
            }
        }
    }, [data]);

    const ChangeStyleHandler = function (e) {
        dispatch(songLikeHandler(true));
    };

    return (
        <div className="audio_ex_controlle_div">
            <i
                class={LikeSongs ? "fas fa-heart likeSong" : "fas fa-heart unlikeSong"}
                onClick={(e) => {
                    ChangeStyleHandler(e);
                    LikeSongHandler(e);
                }}
            ></i>
        </div>
    );
}

export default AudioExtraOptionComponent;
