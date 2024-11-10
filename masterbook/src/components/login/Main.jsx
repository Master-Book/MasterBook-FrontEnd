// src/components/login/Main.js

import { React, useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

function Main() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('email:', email);
    console.log('password:', password);

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userEmail: email,
        inputPassword: password,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          // 응답이 200-299가 아닌 경우 상태 코드와 함께 에러를 발생시킴
          throw new Error(`HTTP error! Status code: ${res.status}`);
        }
        return res.json(); // 응답이 OK인 경우 JSON으로 파싱
      })
      .then((json) => {
        if (json.Authorization) {
          alert('로그인 성공하셨습니다.');
          localStorage.setItem('token', json.Authorization); // Authorization 헤더에 대한 JWT 토큰 저장
          window.location.href = '/';
        } else {
          alert('로그인에 실패했습니다. 다시 시도해주세요.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert(`오류가 발생했습니다. 상태 코드: ${error.message}`);
      });
  };

  return (
    <div className="outer-container">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              className="login_input"
              type="text"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <input
              className="login_input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="signup-link">
          <p className="signup-p">계정이 없으신가요?</p>
          <Link to="/signup" className="login-button">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
