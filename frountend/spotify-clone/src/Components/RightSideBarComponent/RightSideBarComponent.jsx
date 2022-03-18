import React from 'react';
import UserInfoComponent from '../UserInfoComponent/UserInfoComponent';
import UserFriendSmCartComponent from '../UserFriendSmCartComponent/UserFriendSmCartComponent';
import { useSelector } from 'react-redux';

import './RightSideBarComponent.css';

function RightSideBarComponent() {
    const selector = useSelector((state) => state.userStoreData.UserLoginStatus);

    return (
        <div className="right_sidebar_div">
            {selector && selector.success === true ? null : (
                <UserInfoComponent innerText={'Friend Activity'} link={'/user-account'} />
            )}

            <div className="mt-4 mb-4">
                <p>Let friend and follwers on Spotify see what your's listening too.</p>
            </div>

            <UserFriendSmCartComponent />
            <UserFriendSmCartComponent />
            <UserFriendSmCartComponent />

            <div className="mt-4 mb-4">
                <p>
                    Got to Setting - Scoial and enable 'share my listenning activity on Spotify'.
                    You can turn of this any time
                </p>
            </div>
        </div>
    );
}

export default RightSideBarComponent;
