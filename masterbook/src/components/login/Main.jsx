// src/components/login/Main.js

import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="outer-container">
      <div className="avatar">
        <i className="fa fa-user"></i>
      </div>
    <div className="login-container">
      
      <h2>Login</h2>
      <form>
        <div className="input-container">
          <i className="fa fa-envelope icon"></i>
          <input className="login_input" type="text" placeholder="Email ID" required />
        </div>
        <div className="input-container">
          <i className="fa fa-lock icon"></i>
          <input className="login_input" type="password" placeholder="Password" required />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <div className="signup-link">
        <p className="signup-p">계정이 없으신가요?</p>
        <Link to="/signup" className="login-button">회원가입</Link>
      </div>
    </div>
    </div>
  );
}

export default Main;