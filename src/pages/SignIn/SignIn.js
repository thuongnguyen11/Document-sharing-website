import React, { useEffect, useState } from "react";
import {
    Link
} from "react-router-dom";

import './SignIn.css';
import { useAuth } from '../../hooks/useAuth';

function SignIn() {
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { login } = useAuth();

    const database = [{
            email: "admin",
            password: "admin"
        },
        {
            email: "user2",
            password: "pass2"
        }
    ];

    const errors = {
        email: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

        var { email, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.email === email.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
                login({
                    email: email.value,
                    password: pass.value
                });
            }
        } else {
            // Username not found
            setErrorMessages({ name: "email", message: errors.email });
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && ( <
            div className = "error" > { errorMessages.message } < /div>
        );

    // JSX code for login form
    const renderForm = ( <
        div className = "form" >
        <
        form onSubmit = { handleSubmit } >
        <
        div className = "input-container" >
        <
        label className = "lable" > Email < /label> <
        input type = "text"
        name = "email"
        required className = "input" / > { renderErrorMessage("email") } <
        /div> <
        div className = "input-container" >
        <
        label className = "lable" > Password < /label> <
        input type = "password"
        name = "pass"
        required className = "input" / > { renderErrorMessage("pass") } <
        /div> <
        div className = "input-container" >
        <
        button type = "submit"
        className = "submit" > Đăng nhập < /button> <
        /div>

        <
        div className = "relative" >
        <
        div className = "absolute inset-0 flex items-center" >
        <
        div className = "w-full border-t border-gray-300" / >
        <
        /div> <
        div className = "relative flex justify-center text-sm" >
        <
        span className = "px-2 bg-white text-gray-500" > Chưa có tài khoản ?
        <
        Link to = '/sign-up'
        className = "register-now" > Đăng ký ngay < /Link> <
        /span> <
        /div> <
        /div>

        <
        /form> <
        /div>
    );

    return ( <
        div className = "login" >
        <
        div className = "title_signin" > ĐĂNG NHẬP < /div> <
        div className = "login-form" > {
            isSubmitted ? < div > User is successfully logged in < /div> : renderForm} <
            /div> <
            /div>
        );
    }
    export default SignIn;