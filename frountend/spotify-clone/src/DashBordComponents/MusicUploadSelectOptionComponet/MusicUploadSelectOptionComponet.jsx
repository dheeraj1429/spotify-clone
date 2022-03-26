import React from 'react';

import './MusicUploadSelectOptionComponet.css';

function MusicUploadSelectOptionComponet({ data, name, change, value }) {
    return (
        <div>
            <select name={name} value={value} onChange={change} className="music_upload_select_div">
                {data.elm.map((el) => (
                    <option value={el.el} key={Math.random() * 100}>
                        {el.el}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default MusicUploadSelectOptionComponet;
