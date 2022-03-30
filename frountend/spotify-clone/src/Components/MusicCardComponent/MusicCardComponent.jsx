import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectedMusic,
    isPlayHandler,
    playButtonCartELm,
    prevImageInfoHandler,
} from '../../Redux/Action/action';

import './MusicCardComponent.css';

function MusicCardComponent({ data }) {
    const dispatch = useDispatch();
    const [CurrentCartPlay, setCurrentCartPlay] = useState(null);
    const IsPlay = useSelector((state) => state.userStoreData.IsPlay);
    const IdSelector = useSelector((state) => state.userStoreData.CartButtonElm);

    const sendData = function () {
        dispatch(selectedMusic(data));
    };

    const PlayAndPauseHandler = function (event) {
        dispatch(isPlayHandler(!IsPlay));
        dispatch(playButtonCartELm(data._id));
        dispatch(prevImageInfoHandler(`http://localhost:8000//CoverImage/${data.songCover}`));
    };

    useEffect(() => {
        if (IdSelector) {
            setCurrentCartPlay(IdSelector);
        }
    }, [IdSelector]);

    return (
        <div className="Music_cart_div text-center">
            <div className="music_cart_image_div">
                <div
                    className="card_bg_imag"
                    style={{
                        backgroundImage: `url(http://localhost:8000//CoverImage/${data.songCover})`,
                    }}
                ></div>
                <div
                    className="musicPlayButton"
                    style={
                        CurrentCartPlay === data._id
                            ? {
                                  opacity: 1,
                              }
                            : null
                    }
                    onClick={(e) => {
                        sendData();
                        PlayAndPauseHandler(e);
                    }}
                    data-target={data._id}
                >
                    <i
                        class={
                            IsPlay === true && IdSelector === data._id
                                ? 'fas fa-pause'
                                : 'fas fa-play'
                        }
                    ></i>
                </div>
            </div>
            <div className="music_cart_contnet">
                <h3>{data.songType}</h3>
                <p>{`${data.songArtist} - ${data.name.slice(0, 20)}...`}</p>
            </div>
        </div>
    );
}

export default MusicCardComponent;
