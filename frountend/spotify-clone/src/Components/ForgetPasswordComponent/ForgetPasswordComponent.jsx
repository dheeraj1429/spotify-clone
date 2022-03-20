import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userForgetPassword } from '../../Redux/Action/action';
import CustomButtonComponent from '../CustomButtonComponent/CustomButtonComponent';
import InputComponent from '../InputComponent/InputComponent';
import { Link } from 'react-router-dom';

import './ForgetPasswordComponent.css';

function ForgetPasswordComponent() {
    const dispatch = useDispatch();

    const [UserInfo, setUserInfo] = useState({
        email: '',
    });

    const InputHandler = function (e) {
        const name = e.target.name;
        const value = e.target.value;

        setUserInfo({ ...UserInfo, [name]: value });
    };

    const SendHandler = function () {
        const { email } = UserInfo;

        if (email) {
            dispatch(userForgetPassword(email));
        }
    };

    return (
        <div>
            <InputComponent
                name={'email'}
                placeHolder={'Email Address'}
                type={'email'}
                value={UserInfo.email}
                change={InputHandler}
            />

            <div className="mt-3 text-center">
                <CustomButtonComponent
                    innerText={'Reset Password'}
                    onClick={SendHandler}
                    elmClass={'signUp_button'}
                />

                <Link to={'/user-account/SingUp'}>
                    <p className="mt-4 mb-0">Sign Up</p>
                </Link>
            </div>
        </div>
    );
}

export default ForgetPasswordComponent;
