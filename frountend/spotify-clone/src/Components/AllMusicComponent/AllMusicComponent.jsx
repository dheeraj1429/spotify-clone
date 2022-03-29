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
                    <div className="row">
                        {selector !== null
                            ? selector.map((el) => (
                                  <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2 pb-3 px-0">
                                      <MusicCardComponent key={el._id} data={el} />
                                  </div>
                              ))
                            : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllMusicComponent;
