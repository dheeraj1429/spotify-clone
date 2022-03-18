import React from 'react';
import SidebarComponent from '../../Components/SidebarComponent/SidebarComponent';
import { Outlet } from 'react-router';

import RightSideBarComponent from '../../Components/RightSideBarComponent/RightSideBarComponent';
import FooterPlayComponent from '../../Components/FooterPlayComponent/FooterPlayComponent';

import './HomePage.css';

function HomePage() {
    return (
        <div className="home_page">
            <div className="container-fluid p-0">
                <div className="row gx-0">
                    <div className="col-12 col-sm-12 col-md-2">
                        <SidebarComponent />
                    </div>
                    <div className="col-12 col-sm-12 col-md-8">
                        <Outlet />
                    </div>
                    <div className="col-12 col-sm-12 col-md-2">
                        <RightSideBarComponent />
                    </div>
                </div>
            </div>

            <FooterPlayComponent />
        </div>
    );
}

export default HomePage;
