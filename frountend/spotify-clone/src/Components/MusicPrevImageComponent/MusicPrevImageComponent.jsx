import React from 'react';
import { useSelector } from 'react-redux';

import './MusicPrevImageComponent.css';

function MusicPrevImageComponent() {
    const selector = useSelector((state) => state.userStoreData);

    return (
        <div
            className={
                !selector.ShowMusicPrevCart
                    ? 'Music_prev_image_div '
                    : 'Music_prev_image_div Music_prev_image_div_active'
            }
            style={
                selector.PrevImageInfo !== null
                    ? {
                          backgroundImage: `url(${selector.PrevImageInfo})`,
                      }
                    : null
            }
        ></div>
    );
}

export default MusicPrevImageComponent;
