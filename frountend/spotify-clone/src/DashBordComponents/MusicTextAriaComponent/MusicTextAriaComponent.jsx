import React from 'react';
import './MusicTextAriaComponent.css';

function MusicTextAriaComponent({ placeHolder, change, name, label, value }) {
    return (
        <>
            <label htmlFor={placeHolder} className="input_lable_div">
                {label}
            </label>
            <textarea
                name={name}
                id=""
                cols="30"
                rows="10"
                className="music_upload_text_ari"
                placeholder={placeHolder}
                onChange={change ? change : null}
                value={value}
            ></textarea>
        </>
    );
}

export default MusicTextAriaComponent;
