import React from "react";

import "./MusicBannerCartComponent.css";

function MusicBannerCartComponent({ heading, likeSongs, data }) {
    return (
        <div className="your_library_banner_div">
            <h3>Wardell Domestic Sweater Cooper Victory No Aloha in your car april fearwell. Beast Coast Runway..</h3>
            <div className="liked_bannr_content">
                <div>
                    <h1>{heading}</h1>
                    <p>{likeSongs}</p>
                </div>
            </div>
        </div>
    );
}

export default MusicBannerCartComponent;
