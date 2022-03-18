import React from 'react';
import UserInfoComponent from '../UserInfoComponent/UserInfoComponent';
import UserFriendSmCartComponent from '../UserFriendSmCartComponent/UserFriendSmCartComponent';
import './RightSideBarComponent.css';

function RightSideBarComponent() {
    return (
        <div className="right_sidebar_div">
            <UserInfoComponent />

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
