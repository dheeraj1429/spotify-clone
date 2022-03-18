import React from 'react';

import './CustomButtonComponent.css';

function CustomButtonComponent({ innerText, onClick }) {
    return (
        <button className="signUp_button" onClick={onClick ? onClick : null}>
            {innerText}
        </button>
    );
}

export default CustomButtonComponent;
