import React from 'react';
import './MusicTextAriaComponent.css';

function MusicTextAriaComponent({ placeHolder, change, name }) {
    return (
        <textarea
            name={name}
            id=""
            cols="30"
            rows="10"
            className="music_upload_text_ari"
            placeholder={placeHolder}
            onChange={change ? change : null}
        ></textarea>
    );
}

export default MusicTextAriaComponent;
