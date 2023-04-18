import React, { useState } from "react";
import './POPOSSignIn.css'

function SignInForm() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: handle form submission
    };

    return (
        <form id="signin-form" onSubmit={handleSubmit}>
            <h2>Already have an account? Sign in.</h2>
            <br></br>
            <label htmlFor="signin-username-input">
                Username:
                <input
                    id="signin-username-input"
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                />
            </label>
            <label htmlFor="signin-password-input">
                Password:
                <input
                    id="signin-password-input"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
            </label>
            <button className="signin-button" type="submit">Sign In</button>
            <br></br>
        </form>
    );
}

export default SignInForm;
