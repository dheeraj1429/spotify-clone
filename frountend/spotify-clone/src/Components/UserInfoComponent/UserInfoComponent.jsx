import React from 'react';
import { Link } from 'react-router-dom';
import './UserInfoComponent.css';

function UserInfoComponent({ innerText, link }) {
    return (
        <div className="user_sm_div">
            <p>{innerText}</p>
            <Link to={link}>
                <i class="fas fa-user"></i>
            </Link>
        </div>
    );
}

export default UserInfoComponent;
