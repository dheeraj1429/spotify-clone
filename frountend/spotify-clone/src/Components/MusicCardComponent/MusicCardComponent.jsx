import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedMusic, isPlayHandler } from '../../Redux/Action/action';
import './MusicCardComponent.css';

function MusicCardComponent({ data }) {
    const dispatch = useDispatch();
    const IsPlay = useSelector((state) => state.userStoreData.IsPlay);

    const sendData = function () {
        dispatch(selectedMusic(data));
    };

    return (
        <div className="Music_cart_div text-center">
            <div className="music_cart_image_div">
                <div
                    className="card_bg_imag"
                    style={{
                        backgroundImage: `url(http://localhost:8000//CoverImage/${data.songCover})`,
                    }}
                ></div>
                <div className="musicPlayButton" onClick={sendData}>
                    <i class="fas fa-play"></i>
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
