import React from 'react';
import './SongUploadInputComponent.css';

function SongUploadInputComponent({ placeHolder, type, cl, value, change, name, label }) {
    return (
        <>
            <label htmlFor={placeHolder} className="input_lable_div">
                {label}
            </label>
            <input
                type={type}
                name={name}
                placeholder={placeHolder}
                className={cl ? `songUpload_sm_Elm ${cl}` : 'songUpload_sm_Elm'}
                value={value}
                onChange={change ? change : null}
            />
        </>
    );
}

export default SongUploadInputComponent;
