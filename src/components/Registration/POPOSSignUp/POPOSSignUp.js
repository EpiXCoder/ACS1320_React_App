import React, { useState } from "react";
import "./POPOSSignUp.css";

function SignUpForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
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
    <form id="signup-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <br />
      <label htmlFor="username-input">
        Username:
        <input
          id="username-input"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          aria-label="Username"
        />
      </label>

      <label htmlFor="password-input">
        Password:
        <input
          id="password-input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          aria-label="Password"
        />
      </label>

      <label htmlFor="firstName-input">
        First Name:
        <input
          id="firstName-input"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          aria-label="First Name"
        />
      </label>

      <label htmlFor="lastName-input">
        Last Name:
        <input
          id="lastName-input"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          aria-label="Last Name"
        />
      </label>

      <label htmlFor="email-input">
        Email:
        <input
          id="email-input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          aria-label="Email"
        />
      </label>

      <button className="signup-button" type="submit">
        Sign Up
      </button>
      <br />
    </form>
  );
}

export default SignUpForm;
