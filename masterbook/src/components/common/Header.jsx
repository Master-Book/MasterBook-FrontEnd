// src/components/common/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <nav className="title">
          <Link to="/">
            <img
              src={`/images/master_book/logo_white.png`}
              alt={`logo`}
              className="logo"
            />
            Master Book
          </Link>
        </nav>
        <div className="login">
          <Link to="/login">로그인/회원가입</Link>
        </div>
      </div>
      <nav className="subtitle">
        <nav className="games">
          <ul>
            <li>
              <img
                src="images/league_of_legends/logo/logo.png"
                width="20"
                alt="LoL logo"
              />
              <Link to="/league_of_legends">League of Legends</Link>
            </li>
            |
            <li>
              <img
                src="images/stardew_valley/logo/logo.png"
                width="20"
                alt="Stardew Valley logo"
              />
              <Link to="/stardew_valley">Stardew Valley</Link>
            </li>
          </ul>
        </nav>
        <Link to="/more" className="etc">
          게임 더보기
        </Link>
      </nav>
    </header>
  );
}

export default Header;
