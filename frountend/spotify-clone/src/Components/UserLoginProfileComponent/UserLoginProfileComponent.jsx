import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import OptionPopUpComponent from '../OptionPopUpComponent/OptionPopUpComponent';

import './UserLoginProfileComponent.css';

function UserLoginProfileComponent() {
    const [ShowPopup, setShowPopup] = useState(false);
    const selector = useSelector((state) => state.userStoreData.UserLoginStatus);

    const ShowWindow = function () {
        setShowPopup(!ShowPopup);
    };

    return (
        <div className="user_preofile_div">
            <div className="user_profile_inner_div">
                <OptionPopUpComponent showIn={ShowPopup} />
                <p>Wallcome!! {selector.name}</p>
                <div className="user_pr_crd" onClick={ShowWindow}>
                    <i class="fas fa-user"></i>
                </div>
            </div>
        </div>
    );
}

export default UserLoginProfileComponent;
