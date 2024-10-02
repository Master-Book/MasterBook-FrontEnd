import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/league_of_legends">리그 오브 레전드</Link>
          </li>
          <li>
            <Link to="/stardew_valley">스타듀밸리</Link>
          </li>
          {/* 다른 게임들에 대한 링크를 추가하세요 */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
