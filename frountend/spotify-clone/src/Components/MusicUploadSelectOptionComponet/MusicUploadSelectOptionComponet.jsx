import React from 'react';

import './MusicUploadSelectOptionComponet.css';

function MusicUploadSelectOptionComponet({ data, name, change }) {
    return (
        <select
            name={name}
            id=""
            onChange={change ? change : null}
            className="music_upload_select_div"
        >
            {data.elm.map((el) => (
                <option value={el.el} key={Math.random() * 100}>
                    {el.el}
                </option>
            ))}
        </select>
    );
}

export default MusicUploadSelectOptionComponet;
