import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showTheMusicPrev, prevImageInfoHandler } from '../../Redux/Action/action';

import './SongInfoSmCartComponent.css';

function SongInfoSmCartComponent({ data, musicAllData }) {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.userStoreData);

    const ShowPrevImageHandler = function () {
        dispatch(showTheMusicPrev(!selector.ShowMusicPrevCart));
        dispatch(prevImageInfoHandler(`http://localhost:8000//CoverImage/${data.songCover}`));
    };

    return (
        <div className="play_song_info_div d-flex align-items-center">
            {data ? (
                <>
                    <div
                        className="play_div_cart_info"
                        style={
                            data.songCover
                                ? {
                                      backgroundImage: `url(http://localhost:8000//CoverImage/${data.songCover})`,
                                  }
                                : null
                        }
                        onClick={ShowPrevImageHandler}
                    ></div>
                    <div className="play_div_cart_contnet ms-2">
                        <h5>
                            {data.name} , {data.songType}
                        </h5>
                        <p>{data.songArtist}</p>
                    </div>
                </>
            ) : null}
        </div>
    );
}

export default SongInfoSmCartComponent;
