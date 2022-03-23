import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import OptionPopUpComponent from '../OptionPopUpComponent/OptionPopUpComponent';
import { showProfilePopup } from '../../Redux/Action/action';

import './UserLoginProfileComponent.css';

function UserLoginProfileComponent() {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.userStoreData);

    const ShowWindow = function () {
        dispatch(showProfilePopup(!selector.ShowProfilePopUp));
    };

    return (
        <div className="user_preofile_div">
            <div className="user_profile_inner_div">
                <OptionPopUpComponent showIn={selector.ShowProfilePopUp} />
                <p>Wallcome!! {selector.UserLoginStatus.name}</p>
                <div className="user_pr_crd" onClick={ShowWindow}>
                    <i class="fas fa-user"></i>
                </div>
            </div>
        </div>
    );
}

export default UserLoginProfileComponent;
