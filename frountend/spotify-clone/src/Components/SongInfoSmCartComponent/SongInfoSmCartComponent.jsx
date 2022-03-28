import React from 'react';
import './SongInfoSmCartComponent.css';

function SongInfoSmCartComponent({ data, musicAllData }) {
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
