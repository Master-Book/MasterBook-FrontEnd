// src/components/common/Header.js

import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="login">
        <Link to="/login">로그인/회원가입</Link>
      </div>
      <nav className="title">
        <Link to="/">Master Book</Link>
      </nav>
      <nav className="subtitle">
        <nav className="games">
          <ul>
            <li>
              <Link to="/league_of_legends">League of Legends</Link>
            </li>
            <li>
              <Link to="/stardew_valley">Stardew Valley</Link>
            </li>
          </ul>
        </nav>
        <div className="etc">기타 게임</div>
      </nav>
    </header>
  );
}

export default Header;
