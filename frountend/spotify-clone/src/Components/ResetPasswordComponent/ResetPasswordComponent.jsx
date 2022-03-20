import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomButtonComponent from '../CustomButtonComponent/CustomButtonComponent';
import InputComponent from '../InputComponent/InputComponent';
import { userResetPasswordRequest } from '../../Redux/Action/action';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';

import './ResetPasswordComponent.css';

function ResetPasswordComponent() {
    const selector = useSelector((state) => state.userStoreData.UserResetPassword);
    const prams = useParams();
    const dispatch = useDispatch();
    const [UserEr, setUserEr] = useState(null);
    const navigation = useNavigate();

    console.log(selector);

    const [Password, setPassword] = useState({
        password: '',
        confirmPassword: '',
    });

    const InputHandler = function (e) {
        const name = e.target.name;
        const value = e.target.value;

        setPassword({ ...Password, [name]: value });
    };

    const sendHandler = function () {
        const { password, confirmPassword } = Password;

        if (password && confirmPassword) {
            if (password === confirmPassword) {
                dispatch(userResetPasswordRequest({ id: prams.id, password: Password.password }));
            } else {
                setUserEr('password confirm password is not same!!');
            }
        } else {
            setUserEr('filling form is required**');
        }
    };

    useEffect(() => {
        if (selector !== null && selector.success === true) {
            navigation('/user-account/logIn');
        }
    }, [selector]);

    return (
        <div className="reset-password-div">
            {UserEr !== null ? <p className="text-center">{UserEr}</p> : null}

            <InputComponent
                name={'password'}
                type={'password'}
                placeHolder={'New Password'}
                value={Password.password}
                change={InputHandler}
            />

            <InputComponent
                name={'confirmPassword'}
                type={'password'}
                placeHolder={'Confirm New Password'}
                value={Password.confirmPassword}
                change={InputHandler}
            />

            <div className="mt-3 text-center">
                <CustomButtonComponent
                    innerText={'Reset Password'}
                    elmClass={'signUp_button'}
                    onClick={sendHandler}
                />
            </div>
        </div>
    );
}

export default ResetPasswordComponent;
