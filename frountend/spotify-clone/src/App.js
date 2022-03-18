import React from 'react';
import { Routes, Route } from 'react-router';

// components
import AllMusicComponent from './Components/AllMusicComponent/AllMusicComponent';

// pages
import HomePage from './Pages/HomePage/HomePage';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />}>
                    <Route path="/" element={<AllMusicComponent />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
