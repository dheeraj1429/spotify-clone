import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { showProfilePopup } from '../../Redux/Action/action';

import './OptionsSmCartComponent.css';

function OptionsSmCartComponent({ icon, innerText, action, link }) {
    const location = useLocation();
    const dispatch = useDispatch();
    const selector = useSelector((state) => state.userStoreData.ShowProfilePopUp);

    const ShowWindow = function () {
        dispatch(showProfilePopup(false));
    };

    return (
        <Link to={link ? link : location.pathname}>
            <div
                className="option_sm_div_cart"
                onClick={
                    action
                        ? () => {
                              action();
                              ShowWindow();
                          }
                        : () => ShowWindow()
                }
            >
                <i class={icon}></i>
                <p>{innerText}</p>
            </div>
        </Link>
    );
}

export default OptionsSmCartComponent;
