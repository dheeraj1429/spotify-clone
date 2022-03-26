import React from 'react';
import './MusicSelectCartComponent.css';

function MusicSelectCartComponent({ name, change, ic }) {
    return (
        <div className="music_upload_cart_pr">
            <div className="music_card_div">
                <i class={ic}></i>
            </div>
            <div className="file_upload_select_op">
                <input type="file" name={name} onChange={change} />
            </div>
        </div>
    );
}

export default MusicSelectCartComponent;
