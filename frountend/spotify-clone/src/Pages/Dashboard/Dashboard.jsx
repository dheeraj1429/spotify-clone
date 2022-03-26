import React, { useEffect } from 'react';
import DashBoardSideBarComponent from '../../DashBordComponents/DashBoardSideBarComponent/DashBoardSideBarComponent';
import { Outlet } from 'react-router';
import { useNavigate } from 'react-router';

import './Dashboard.css';

function Dashboard() {
    const navigation = useNavigate();

    useEffect(() => {
        const data = window.localStorage.getItem('userData');
        if (!data) {
            navigation('/');
        }
    }, []);

    return (
        <div className="User_dashboard_main_div">
            <div className="container-fluid p-0">
                <div className="row gx-0">
                    <div className="col-12 col-sm-12 col-md-2">
                        <DashBoardSideBarComponent />
                    </div>
                    <div className="col-12 col-sm-12 col-md-10">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
