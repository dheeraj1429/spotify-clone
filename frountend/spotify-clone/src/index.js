import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import store from './Redux/Store/store';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
