import React from 'react';
import SignUpForm from './POPOSSignUp/POPOSSignUp';
import SignInForm from './POPOSSignIn/POPOSSignIn';
import './POPOSRegister.css';


function Register() {
    return(
        <div className = "register">
            <SignUpForm />
            <SignInForm />
        </div>
    )
}

export default Register