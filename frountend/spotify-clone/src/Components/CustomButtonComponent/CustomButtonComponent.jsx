import React from 'react';

import './CustomButtonComponent.css';

function CustomButtonComponent({ innerText, onClick, elmClass, type }) {
    return (
        <button
            type={type ? type : 'button'}
            className={elmClass ? `${elmClass} button` : 'button'}
            onClick={onClick ? onClick : null}
        >
            {innerText}
        </button>
    );
}

export default CustomButtonComponent;
