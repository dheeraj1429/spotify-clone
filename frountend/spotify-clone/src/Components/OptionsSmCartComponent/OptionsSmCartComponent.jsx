import React from 'react';

import './OptionsSmCartComponent.css';

function OptionsSmCartComponent({ icon, innerText, action }) {
    return (
        <div className="option_sm_div_cart" onClick={action ? action : null}>
            <i class={icon}></i>
            <p>{innerText}</p>
        </div>
    );
}

export default OptionsSmCartComponent;
