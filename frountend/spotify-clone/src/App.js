import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { useDispatch } from 'react-redux';
import { userPresent } from './Redux/Action/action';

// components
import AllMusicComponent from './Components/AllMusicComponent/AllMusicComponent';
import SignUpComponent from './Components/SignUpComponent/SignUpComponent';
import LogInComponent from './Components/LogInComponent/LogInComponent';

// pages
import HomePage from './Pages/HomePage/HomePage';
import LogInAndSignInPage from './Pages/LoginAndSignInPage/LogInAndSignInPage';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
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
                </Route>
            </Routes>
        </div>
    );
}

export default App;
