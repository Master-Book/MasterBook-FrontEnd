import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { toast } from "react-toastify";

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

    if (password && newPasswordConfirm !== password) {
      setError("비밀번호가 일치하지 않습니다.");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${SERVER_IP}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail: email,
        nickname: userName,
        userPassword: password,
        role: 0,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status code: ${res.status}`);
        }
        return res.json();
      })
      .then(() => {
        toast.success("회원가입에 성공하였습니다.");
        navigate("/");
      })
      .catch((error) => {
        toast.error(`오류가 발생했습니다. 상태 코드: ${error.message}`);
      });
  };

  return (
    <div className="background-container">
      <div className="content-container">
        <div className="left-content">
          <h1>Master Book</h1>
          <p>게임 전략 커뮤니티에 가입하고 더 많은 혜택을 누리세요!</p>
          <ul>
            <li>다양한 전략을 공유하고 확인하세요.</li>
            <li>캐릭터별 맞춤 정보를 활용하세요.</li>
          </ul>
        </div>
        <div className="login-container">
          <h2>회원가입</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                className="login_input"
                type="text"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <input
                className="login_input"
                type="text"
                placeholder="닉네임"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <input
                className="login_input"
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <input
                className="login_input"
                type="password"
                placeholder="비밀번호 확인"
                value={passwordConfirm}
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
            >
              가입하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
