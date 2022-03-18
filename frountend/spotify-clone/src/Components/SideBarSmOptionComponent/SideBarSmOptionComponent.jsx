import React from 'react';
import { Link } from 'react-router-dom';
import './SideBarSmOptionComponent.css';

function SideBarSmOptionComponent({ icon, innerText, onClick, active }) {
    return (
        <Link to={innerText === 'Home' ? '/' : `/${innerText.replaceAll(' ', '-')}`}>
            <div
                className={active === innerText ? 'option_sm_div option_active' : 'option_sm_div'}
                onClick={onClick ? onClick : null}
                data-elm={innerText}
            >
                <i class={icon}></i>
                <p>{innerText}</p>
            </div>
        </Link>
    );
}

export default SideBarSmOptionComponent;
