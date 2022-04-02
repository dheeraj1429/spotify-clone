import React from "react";
import MusicCardComponent from "../MusicCardComponent/MusicCardComponent";
import MusicBannerCartComponent from "../MusicBannerCartComponent/MusicBannerCartComponent";
import { useSelector } from "react-redux";

import "./YourLibraryComponent.css";

function YourLibraryComponent() {
    const selector = useSelector((state) => state.userStoreData.SongLikeStore);

    return (
        <div className="your_library_div">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 mb-4">
                    <MusicBannerCartComponent
                        heading={"Liked Songs"}
                        likeSongs={`${selector !== [] && selector.length > 0 ? selector.length : 0} Liked songs`}
                        data={selector}
                    />
                </div>

                {selector !== null
                    ? selector.map((el) => (
                          <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2 pb-3 px-0">
                              <MusicCardComponent key={el._id} data={el} />
                          </div>
                      ))
                    : null}
            </div>
        </div>
    );
}

export default YourLibraryComponent;
