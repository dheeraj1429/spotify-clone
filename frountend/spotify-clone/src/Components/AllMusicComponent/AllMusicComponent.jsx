import React from 'react';
import MusicCardComponent from '../MusicCardComponent/MusicCardComponent';
import { useSelector } from 'react-redux';

import './AllMusicComponent.css';

function AllMusicComponent() {
    const selector = useSelector((state) => state.userStoreData.AllMusicList);

    return (
        <div className="all_music_div">
            <div className="all_music_banner_div"></div>

            <div className="mt-5 all_music_list_cart">
                <h1>Shows to try</h1>
                <div className="music_cl_div">
                    {selector.map((el) => (
                        <MusicCardComponent key={el._id} data={el} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AllMusicComponent;
