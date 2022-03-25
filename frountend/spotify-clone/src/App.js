import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { useDispatch } from 'react-redux';
import { userPresent } from './Redux/Action/action';
import { getAllMusic } from './Redux/Action/action';

// components
import AllMusicComponent from './Components/AllMusicComponent/AllMusicComponent';
import SignUpComponent from './Components/SignUpComponent/SignUpComponent';
import LogInComponent from './Components/LogInComponent/LogInComponent';
import ForgetPasswordComponent from './Components/ForgetPasswordComponent/ForgetPasswordComponent';
import ResetPasswordComponent from './Components/ResetPasswordComponent/ResetPasswordComponent';

// pages
import HomePage from './Pages/HomePage/HomePage';
import LogInAndSignInPage from './Pages/LoginAndSignInPage/LogInAndSignInPage';

// dashboard
import Dashboard from './Pages/Dashboard/Dashboard';
import DashBoardMusicUploadComponent from './DashBordComponents/DashBoardMusicUploadComponent/DashBoardMusicUploadComponent';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMusic());
        const data = window.localStorage.getItem('userData');
        if (data) {
            const userData = JSON.parse(data);
            dispatch(userPresent(userData));
        }
    }, []);

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />}>
                    <Route path="/" element={<AllMusicComponent />} />
                </Route>
                <Route path="/user-account" element={<LogInAndSignInPage />}>
                    <Route path="singUp" element={<SignUpComponent />} />
                    <Route path="logIn" element={<LogInComponent />} />
                    <Route path="forget-password" element={<ForgetPasswordComponent />} />
                    <Route path="reset-password/:id" element={<ResetPasswordComponent />} />
                </Route>
                <Route path="/admin/dashboard" element={<Dashboard />}>
                    <Route path="upload-music" element={<DashBoardMusicUploadComponent />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
