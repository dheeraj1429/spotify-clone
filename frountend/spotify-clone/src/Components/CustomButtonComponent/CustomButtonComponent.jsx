import React from 'react';

import './CustomButtonComponent.css';

function CustomButtonComponent({ innerText, onClick, elmClass }) {
    return (
        <button
            className={elmClass ? `${elmClass} button` : 'button'}
            onClick={onClick ? onClick : null}
        >
            {innerText}
        </button>
    );
}

export default CustomButtonComponent;
