import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import SidebarComponent from '../../Components/SidebarComponent/SidebarComponent';
import RightSideBarComponent from '../../Components/RightSideBarComponent/RightSideBarComponent';
import MusicUploadComponent from '../../DashBordComponents/MusicUploadComponent/MusicUploadComponent';

import './MusicUploadPage.css';

function MusicUploadPage() {
    const selector = useSelector((state) => state.userStoreData.UserLoginStatus);
    const navigation = useNavigate();

    useEffect(() => {
        if (selector !== null) {
            if (selector.admin === 'user') {
                navigation('/');
            }
        }
    }, [selector]);

    return (
        <div className="Music_upload_div">
            <div className="container-fluid p-0">
                <div className="row gx-0">
                    <div className="col-12 col-sm-12 col-md-2">
                        <SidebarComponent />
                    </div>
                    <div className="col-12 col-sm-12 col-md-8">
                        <MusicUploadComponent />
                    </div>
                    <div className="col-12 col-sm-12 col-md-2">
                        <RightSideBarComponent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MusicUploadPage;
