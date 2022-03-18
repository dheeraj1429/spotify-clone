import React from 'react';
import MusicCardComponent from '../MusicCardComponent/MusicCardComponent';
import './AllMusicComponent.css';

function AllMusicComponent() {
    return (
        <div className="all_music_div">
            <div className="all_music_banner_div"></div>

            <div className="mt-5 all_music_list_cart">
                <h1>Shows to try</h1>
                <div className="d-flex">
                    <MusicCardComponent />
                </div>
            </div>
        </div>
    );
}

export default AllMusicComponent;
