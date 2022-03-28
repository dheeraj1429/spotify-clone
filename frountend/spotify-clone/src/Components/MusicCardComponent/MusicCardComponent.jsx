import React from 'react';
import { useDispatch } from 'react-redux';
import { selectedMusic } from '../../Redux/Action/action';
import './MusicCardComponent.css';

function MusicCardComponent({ data }) {
    const dispatch = useDispatch();

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
                <p>{`${data.songArtist} - ${data.name}`}</p>
            </div>
        </div>
    );
}

export default MusicCardComponent;
