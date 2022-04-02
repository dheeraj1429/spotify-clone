import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { allSongsHandler, SongsNavigator, isPlayHandler } from "../../Redux/Action/action";

import "./MusicBannerCartComponent.css";

function MusicBannerCartComponent({ heading, likeSongs, data }) {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.userStoreData);
    const IsPlay = useSelector((state) => state.userStoreData.IsPlay);

    const PlayLibrarySongsHandler = function () {
        if (!selector.SongsNavigator) {
            dispatch(allSongsHandler(data));
            dispatch(SongsNavigator(true));
            dispatch(isPlayHandler(true));
        }

        if (!IsPlay) {
            dispatch(isPlayHandler(true));
        } else {
            dispatch(isPlayHandler(false));
        }
    };

    return (
        <div className="your_library_banner_div">
            {selector.SongLikeStore !== [] && selector.SongLikeStore.length > 0 ? (
                <div className="library_playButton_Div" onClick={PlayLibrarySongsHandler}>
                    <i class={!selector.LibrarySongsPlay || !IsPlay ? "fas fa-play" : "fas fa-pause"}></i>
                </div>
            ) : null}

            <h3>Wardell Domestic Sweater Cooper Victory No Aloha in your car april fearwell. Beast Coast Runway..</h3>
            <div className="liked_bannr_content">
                <div>
                    <h1>{heading}</h1>
                    <p>{likeSongs}</p>
                </div>
            </div>
        </div>
    );
}

export default MusicBannerCartComponent;
