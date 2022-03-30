import { useState } from 'react';
import SideBarSmOptionComponent from '../SideBarSmOptionComponent/SideBarSmOptionComponent';
import MusicPrevImageComponent from '../MusicPrevImageComponent/MusicPrevImageComponent';

import './SidebarComponent.css';

function SidebarComponent() {
    const [ActiveSideBar, setActiveSideBar] = useState('Home');

    const ActiveELm = function (e) {
        const target = e.currentTarget;
        const elmDataAttr = target.getAttribute('data-elm');

        setActiveSideBar(elmDataAttr);
    };

    return (
        <div className="side_bar_div">
            <MusicPrevImageComponent />
            <div className="side_bar_inner_div">
                <i class="fas fa-ellipsis-h"></i>

                <SideBarSmOptionComponent
                    icon={'fas fa-home'}
                    innerText={'Home'}
                    onClick={ActiveELm}
                    active={ActiveSideBar}
                />
                <SideBarSmOptionComponent
                    icon={'fas fa-search'}
                    innerText={'Search'}
                    onClick={ActiveELm}
                    active={ActiveSideBar}
                />
                <SideBarSmOptionComponent
                    icon={'fas fa-stream'}
                    innerText={'Your Library'}
                    onClick={ActiveELm}
                    active={ActiveSideBar}
                />

                <div className="mt-4">
                    <SideBarSmOptionComponent
                        icon={'fas fa-plus-square'}
                        innerText={'Create Playlist'}
                        onClick={ActiveELm}
                        active={ActiveSideBar}
                    />
                    <SideBarSmOptionComponent
                        icon={'fas fa-heart'}
                        innerText={'Liked'}
                        onClick={ActiveELm}
                        active={ActiveSideBar}
                    />
                    <hr />
                </div>
            </div>
        </div>
    );
}

export default SidebarComponent;
