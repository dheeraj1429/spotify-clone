import React from 'react';
import DashBoardHeadingComponent from '../DashBoardHeadingComponent/DashBoardHeadingComponent';

import './DashBoardMusicUploadComponent.css';

function DashBoardMusicUploadComponent() {
    return (
        <div className="dashboard_music_upload_div">
            <DashBoardHeadingComponent
                heading={'Upload Music'}
                ic={'fas fa-home-alt'}
                subHeading={'dashboard / upload music'}
            />
        </div>
    );
}

export default DashBoardMusicUploadComponent;
