import React, { useState, useEffect } from 'react';
import CustomButtonComponent from '../CustomButtonComponent/CustomButtonComponent';
import InputComponent from '../InputComponent/InputComponent';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userSignUp } from '../../Redux/Action/action';
import { useNavigate } from 'react-router';

import './SignUpComponent.css';

function SignUpComponent() {
    const [UserInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
    });

    const selector = useSelector((state) => state.userStoreData.UserLoginStatus);
    const navigation = useNavigate();
    const dispatch = useDispatch();

    const InputHandler = function (e) {
        const name = e.target.name;
        const value = e.target.value;

        setUserInfo({ ...UserInfo, [name]: value });
    };

    const SendHandler = function () {
        const { name, email, password } = UserInfo;

        if (name && email && password) {
            dispatch(userSignUp({ name, email, password }));
        } else {
            alert('please fill the form');
        }
    };

    useEffect(() => {
        if (selector && selector.success === true) {
            navigation('/');
        }
    }, [selector]);

    return (
        <div>
            <InputComponent
                name={'name'}
                placeHolder={'Name'}
                type={'text'}
                value={UserInfo.name}
                change={InputHandler}
            />
            <InputComponent
                name={'email'}
                placeHolder={'Email Address'}
                type={'email'}
                value={UserInfo.email}
                change={InputHandler}
            />
            <InputComponent
                name={'password'}
                placeHolder={'Password'}
                type={'password'}
                value={UserInfo.password}
                change={InputHandler}
            />

            <div className="mt-3 text-center">
                <CustomButtonComponent innerText={'Sign Up'} onClick={SendHandler} />

                <Link to={'/user-account/logIn'}>
                    <p className="mt-4 mb-0">Log In</p>
                </Link>

                <p className="mt-3">RESET PASSWORD</p>
            </div>
        </div>
    );
}

export default SignUpComponent;
