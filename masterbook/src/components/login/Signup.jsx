// src/components/login/Signup.js

import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="outer-container">
    <div className="login-container">
      <h2>Signup</h2>
      <form>
        <div className="input-container">
          <i className="fa fa-envelope icon"></i>
          <input className="login_input" type="text" placeholder="Email ID" required />
        </div>
        <div className="input-container">
          <i className="fa fa-lock icon"></i>
          <input className="login_input" type="password" placeholder="Password" required />
        </div>
        <button type="submit" className="login-button">Sign Up</button>
      </form>
    </div>
    </div>
  );
}

export default Signup;