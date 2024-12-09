// src/components/post/postDetail/ValiditySection.js

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./AiValiditySection.css";

const SERVER_IP = process.env.REACT_APP_SERVER_IP;

function AiValiditySection() {
  const { postId } = useParams();
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const checkValidity = async () => {
    try {
      const response = await fetch(`${SERVER_IP}/posts/${postId}/isAccurate`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // 토큰 필요 시
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("응답 에러 내용:", errorText);
        throw new Error(`HTTP error! Status code: ${response.status}`);
      }

      const data = await response.json();
      console.log("백엔드 응답 데이터:", data);

      if (data.isAccurate === 1) {
        setMessage("유효합니다.");
        setMessageType("success"); // 성공 메시지 타입 설정
      } else if (data.isAccurate === 0) {
        setMessage("유효하지 않습니다.");
        setMessageType("error"); // 오류 메시지 타입 설정
      } else {
        setMessage("결과를 확인할 수 없습니다.");
        setMessageType("error");
      }
    } catch (error) {
      console.error("Error during validity check:", error);
      setMessage("오류가 발생했습니다. 다시 시도해주세요.");
      setMessageType("error");
    }
  };

  return (
    <div className="aiValidity">
      <button className="validity-button" onClick={checkValidity}>
        AI 유효성 검사
      </button>
      {message && (
        <p className={`validity-message ${messageType}`}>{message}</p>
      )}
    </div>
  );
}

export default AiValiditySection;
