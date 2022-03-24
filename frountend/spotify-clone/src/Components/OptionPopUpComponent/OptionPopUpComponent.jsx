import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserProfileSmCardComponent from '../UserProfileSmCardComponent/UserProfileSmCardComponent';
import OptionsSmCartComponent from '../OptionsSmCartComponent/OptionsSmCartComponent';
import { logOutUser } from '../../Redux/Action/action';
import { useNavigate } from 'react-router';

import './OptionPopUpComponent.css';

function OptionPopUpComponent({ showIn }) {
    const selector = useSelector((state) => state.userStoreData.UserLoginStatus);
    const dispatch = useDispatch();
    const navigation = useNavigate();

    const LogOutUser = function () {
        window.localStorage.removeItem('userData');
        dispatch(logOutUser(null));
        navigation('/');
    };

    return (
        <div className={!showIn ? 'option_popUp_div' : 'option_popUp_div option_popUp_div_active'}>
            <UserProfileSmCardComponent data={selector} />

            <OptionsSmCartComponent
                icon={'fas fa-sign-out'}
                innerText={'Log Out'}
                action={LogOutUser}
            />

            {/* <OptionsSmCartComponent
                icon={'fas fa-upload'}
                innerText={'Upload Music'}
                link={'/upload-music'}
            /> */}
        </div>
    );
}

export default OptionPopUpComponent;
