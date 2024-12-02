// src/components/common/Header.js

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Header.css';

const SERVER_IP = process.env.REACT_APP_SERVER_IP;

function Header() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem('token');
  console.log('token:', localStorage.getItem('token'));
  console.log('isLoggedIn:', isLoggedIn);

  const handleLogout = () => {
    /*
    // '/logout' 엔드포인트로 로그아웃 요청 보내기
    axios
      .post(
        `${SERVER_IP}/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(() => {
        // 로그아웃 성공 시 토큰 삭제 및 페이지 이동
        localStorage.removeItem("token");
        navigate("/");
      })
      .catch((error) => {
        console.error("로그아웃 중 에러 발생:", error);
        // 에러 처리 (필요에 따라 사용자에게 에러 메시지 표시)
      });
      */
    localStorage.removeItem('token');
  };

  return (
    <header className="header">
      <div className="header-content">
        <nav className="title">
          <Link to="/">
            <img
              src={`/images/master_book/logo_white.png`}
              alt="logo"
              className="logo"
            />
            Master Book
          </Link>
        </nav>
        <div className="login">
          {/* 문의하기 링크 추가 */}
          <Link to="/contact">문의하기</Link>
          <span className="separator">|</span>
          {isLoggedIn ? (
            <button onClick={handleLogout} className="logout-button">
              로그아웃
            </button>
          ) : (
            <Link to="/login">로그인/회원가입</Link>
          )}
        </div>
      </div>
      <nav className="subtitle">
        <nav className="games">
          <ul>
            <li>
              <img
                src="/images/league_of_legends/logo/logo.png"
                width="20"
                alt="LoL logo"
              />
              <Link to="/league_of_legends">League of Legends</Link>
            </li>
            <li>
              <img
                src="/images/stardew_valley/logo/logo.png"
                width="20"
                alt="Stardew Valley logo"
              />
              <Link to="/stardew_valley">Stardew Valley</Link>
            </li>
            <li>
              <img
                src="/images/it_takes_two/logo/logo.png"
                width="20"
                alt="It Takes Two logo"
              />
              <Link to="/it_takes_two">It Takes Two</Link>
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
