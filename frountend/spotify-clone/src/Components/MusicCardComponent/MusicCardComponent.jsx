import React from 'react';
import './MusicCardComponent.css';

function MusicCardComponent({ data }) {
    console.log(data);

    return (
        <div className="Music_cart_div text-center">
            <div className="music_cart_image_div">
                <img
                    src="https://nice-assets-3.s3-accelerate.amazonaws.com/smart_templates/83f03d3dea03ad8aa59580517ad9789c/assets/preview_390d58b0da35395e71e5c97ba0aa1fde.jpg"
                    alt=""
                />
                <div className="musicPlayButton">
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
