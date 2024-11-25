// src/components/login/Signup.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const SERVER_IP = process.env.REACT_APP_SERVER_IP;

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const handlePasswordConfirmChange = (e) => {
    const newPasswordConfirm = e.target.value;
    setPasswordConfirm(newPasswordConfirm);

    // 비밀번호 확인이 일치하는지 체크
    if (password && newPasswordConfirm !== password) {
      setError("비밀번호가 일치하지 않습니다.");
    } else {
      setError(""); // 에러 초기화
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("email:", email);
    console.log("userName:", userName);
    console.log("password:", password);
    console.log(`API:${SERVER_IP}/login`);

    fetch(`${SERVER_IP}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
        // `Authorization`과 `accessToken`을 모두 처리
        if (json.Authorization && json.accessToken) {
          alert("로그인 성공하셨습니다.");
          localStorage.setItem("token", json.Authorization); // Authorization 헤더에 대한 JWT 토큰 저장
          localStorage.setItem("accessToken", json.accessToken); // accessToken을 따로 저장
          navigate("/");
        } else {
          alert("로그인에 실패했습니다. 다시 시도해주세요.");
        }
      })

      .catch((error) => {
        console.error("Error:", error);
        alert(`오류가 발생했습니다. 상태 코드: ${error.message}`);
      });
  };

  return (
    <div className="outer-container">
      <div className="login-container">
        <h2>Sign up</h2>
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
              type="text"
              placeholder="Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <input
              className="login_input"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <input
              className="login_input"
              type="password"
              id="passwordConfirm"
              placeholder="Password Check"
              onChange={handlePasswordConfirmChange}
              required
            />
          </div>
          {error && <p className="error-text">{error}</p>}
          <button
            type="submit"
            className={`login-button ${
              password && password === passwordConfirm ? "active" : ""
            }`}
            onSubmit={() => password && passwordConfirm === password}
          >
            가입하기
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
