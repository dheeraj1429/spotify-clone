import React from "react";

import "./SeekBarComponent.css";

function SeekBarComponent({ change, value }) {
    return (
        <input min="0" value={value ? value : null} type="range" className="audio_controlle_elm" onChange={change} />
    );
}

export default SeekBarComponent;
