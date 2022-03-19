import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomButtonComponent from '../CustomButtonComponent/CustomButtonComponent';
import InputComponent from '../InputComponent/InputComponent';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { userLogIn } from '../../Redux/Action/action';

import './LogInComponent.css';

function LogInComponent() {
    const [UserInfo, setUserInfo] = useState({
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
        const { email, password } = UserInfo;

        if (email && password) {
            dispatch(userLogIn({ email, password }));
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
        <div className="user_login_div">
            <div>
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

                    <Link to={'/user-account/SingUp'}>
                        <p className="mt-4 mb-0">Sign Up</p>
                    </Link>

                    <p className="mt-3">RESET PASSWORD</p>
                </div>
            </div>
        </div>
    );
}

export default LogInComponent;
