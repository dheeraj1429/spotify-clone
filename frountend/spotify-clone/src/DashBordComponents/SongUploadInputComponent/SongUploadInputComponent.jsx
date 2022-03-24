import React from 'react';
import './SongUploadInputComponent.css';

function SongUploadInputComponent({ placeHolder, type, cl, value, change, name }) {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeHolder}
            className={cl ? `songUpload_sm_Elm ${cl}` : 'songUpload_sm_Elm'}
            value={value ? value : null}
            onChange={change ? change : null}
        />
    );
}

export default SongUploadInputComponent;
