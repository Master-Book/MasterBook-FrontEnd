// src/components/login/Signup.js

import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="outer-container">
      <div className="sign-container">
        <h2>Sign up</h2>
        <form>
          <div className="form-container">
            <div className="input-left-container">
              <div className="input-container">
                <input
                  className="login_input"
                  type="text"
                  placeholder="ID"
                  required
                />
              </div>
              <div className="input-container">
                <input
                  className="login_input"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="input-container">
                <input
                  className="login_input"
                  type="password"
                  placeholder="Password Check"
                  required
                />
              </div>
            </div>
            <div className="input-left-container">
              <div className="input-container">
                <input
                  className="login_input"
                  type="text"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="input-container">
                <input
                  className="login_input"
                  type="text"
                  placeholder="인증번호"
                  required
                />
              </div>
              <div className="input-container">
                <input
                  className="login_input"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
            </div>
          </div>
          <button type="submit" className="login-button">
            가입하기
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
