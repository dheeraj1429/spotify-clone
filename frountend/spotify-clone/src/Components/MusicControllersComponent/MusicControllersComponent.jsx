import React from 'react';

import './MusicControllersComponent.css';

function MusicControllersComponent() {
    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="controlles_buttons_div d-flex align-items-center">
                    <i class="fas fa-random"></i>
                    <i class="fas fa-angle-left"></i>
                    <div>
                        <i class="fas fa-play"></i>
                    </div>
                    <i class="fas fa-angle-right"></i>
                    <i class="fas fa-repeat"></i>
                </div>
            </div>

            <div className="music_info_div">
                <p>00:00</p>
                <div className="music_duration_div"></div>
                <p>00:00</p>
            </div>
        </>
    );
}

export default MusicControllersComponent;
