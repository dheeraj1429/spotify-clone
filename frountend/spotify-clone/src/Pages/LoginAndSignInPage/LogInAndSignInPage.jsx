import React from 'react';
import { Outlet } from 'react-router';

import './LogInAndSignInPage.css';

function LogInAndSignInPage() {
    return (
        <div className="LogInAndSignInDiv">
            <div className="userAccount_div_inner">
                <div className="LogIn_div">
                    <div className="text-center mb-4">
                        <img src="/images/logo.png" alt="" />
                    </div>

                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default LogInAndSignInPage;
