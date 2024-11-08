// src/components/home/Main.js

import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <h1>Masterbook에 오신 것을 환영합니다!</h1>
      <p>원하는 게임을 선택하여 공략 정보를 확인하세요.</p>
      <li>
        <Link to="/postWrite">글작성</Link>
      </li>
    </div>
  );
}

export default Main;
