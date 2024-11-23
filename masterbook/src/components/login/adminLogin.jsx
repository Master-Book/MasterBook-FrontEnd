import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './adminLogin.css';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 간단한 인증 로직 (실제 프로젝트에서는 API 호출 필요)
    if (username === 'admin' && password === 'admin') {
      navigate('/admin');
    } else {
      alert('아이디 또는 비밀번호가 잘못되었습니다.');
    }
  };

  return (
    <div className="admin-login-container">
      <h2>관리자 로그인</h2>
      <form onSubmit={handleSubmit} className="admin-login-form">
        <div>
          <label>아이디:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>비밀번호:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}

export default AdminLogin;
