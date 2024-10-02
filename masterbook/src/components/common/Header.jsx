import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="login">
        <Link to="/login">로그인/회원가입</Link>
      </div>
      <nav className="nav">
        <h2 className="title">Master Book</h2>
      </nav>
      <nav className="game-arr">
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/league_of_legends">League of Legends</Link>
          </li>
          <li>
            <Link to="/stardew_valley">Stardew Valley</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
