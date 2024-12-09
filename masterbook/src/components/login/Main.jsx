// src/components/login/Main.js
import { React, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";

const SERVER_IP = process.env.REACT_APP_SERVER_IP;

function Main() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("email:", email);
    console.log("password:", password);
    console.log(`API:${SERVER_IP}/login`);

    fetch(`${SERVER_IP}/login`, {
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
        if (json.Authorization) {
          alert("로그인 성공하셨습니다.");
          localStorage.setItem("token", json.Authorization); // Authorization 헤더에 대한 JWT 토큰 저장
          //localStorage.setItem("accessToken", json.accessToken); // accessToken을 따로 저장
          localStorage.setItem("nickname", json.nickname); // 닉네임 저장
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
    <div className="background-container">
      <div className="content-container">
        <div className="left-content">
          <h1>Master Book</h1>
          <p>게임 전략 커뮤니티를 위한 완벽한 선택!</p>
          <ul>
            <li>쉽게 전략을 찾고 공유하세요.</li>
            <li>다양한 캐릭터별 팁을 확인하세요.</li>
          </ul>
        </div>
        <div className="login-container">
          <h2>로그인</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                type="text"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">
              로그인
            </button>
          </form>
          <div className="signup-link">
            <p>계정이 없으신가요?</p>
            <Link to="/signup" className="signup-button">
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
