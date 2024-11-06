// src/components/login/Main.js

import React from "react";
import "./login.css";

function Main() {
  return (
    <div className="login-container">
      <div className="avatar">
        <i className="fa fa-user"></i>
      </div>
      <h2>Login</h2>
      <form>
        <div className="input-container">
          <i className="fa fa-envelope icon"></i>
          <input type="text" placeholder="Email ID" required />
        </div>
        <div className="input-container">
          <i className="fa fa-lock icon"></i>
          <input type="password" placeholder="Password" required />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default Main;
