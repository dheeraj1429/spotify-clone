import React from 'react';

import './SeekBarComponent.css';

function SeekBarComponent({ change }) {
    return <input min="0" type="range" className="audio_controlle_elm" onChange={change} />;
}

export default SeekBarComponent;
