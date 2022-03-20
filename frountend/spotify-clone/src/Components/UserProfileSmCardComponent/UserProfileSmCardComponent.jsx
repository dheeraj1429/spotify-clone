import React from 'react';

import './UserProfileSmCardComponent.css';

function UserProfileSmCardComponent({ data }) {
    return (
        <div className="userProfile_div">
            <div className="user_profile_img">
                <i class="fas fa-user"></i>
            </div>
            <div>
                <p>{data.name}</p>
                <p>{data.email}</p>
            </div>
        </div>
    );
}

export default UserProfileSmCardComponent;
