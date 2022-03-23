import React from 'react';

import './HeadingComponent.css';

function HeadingComponent({ innerText, icon }) {
    return (
        <div className="d-flex align-items-center uploadHeadingDiv">
            <i class={icon}></i>
            <h1 className="ms-3">{innerText}</h1>
        </div>
    );
}

export default HeadingComponent;
