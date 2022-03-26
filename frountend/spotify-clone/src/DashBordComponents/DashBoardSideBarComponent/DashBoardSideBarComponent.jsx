import React, { useState } from 'react';
import DashBoardTabsComponent from '../DashBoardTabsComponent/DashBoardTabsComponent';

import './DashBoardSideBarComponent.css';

function DashBoardSideBarComponent() {
    const [ActiveBar, setActiveBar] = useState('');

    const activeHandler = function (e) {
        const targetValue = e.currentTarget.getAttribute('data-target');
        setActiveBar(targetValue);
    };

    return (
        <div className="dashboard_side_bar_div">
            <div className="dashboard_sidebar_inner_div stikcy_div">
                <DashBoardTabsComponent
                    data={'dashboard'}
                    action={activeHandler}
                    dataTarget={ActiveBar}
                    headingData={'Dashboard'}
                    elm={[{ el: 'Defaul' }, { el: 'Ecommerce' }, { el: 'Crypto' }]}
                    icon={'fas fa-house'}
                />
                <DashBoardTabsComponent
                    data={'Music'}
                    action={activeHandler}
                    dataTarget={ActiveBar}
                    headingData={'Music'}
                    icon={'fas fa-headphones-alt'}
                    elm={[{ el: 'upload music', ic: 'fas fa-upload' }]}
                />
            </div>
        </div>
    );
}

export default DashBoardSideBarComponent;
