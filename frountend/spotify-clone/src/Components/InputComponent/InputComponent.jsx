import React from 'react';

import './InputComponent.css';

function InputComponent({ name, placeHolder, type, value, change }) {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeHolder}
            className="UserInputDiv"
            value={value}
            onChange={change ? change : null}
        />
    );
}

export default InputComponent;
