import React from 'react';
import SignUpForm from './POPOSSignUp/POPOSSignUp';
import SignInForm from './POPOSSignIn/POPOSSignIn'


function Register() {
    return(
        <div className = "randomspace">
        <SignUpForm />
        <SignInForm />
        </div>
    )
}

export default Register