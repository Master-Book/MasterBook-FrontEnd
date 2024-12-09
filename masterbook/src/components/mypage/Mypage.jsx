// src/components/mypage/Mypage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import MypageTab from "./MypageTab";
import MypageContent from "./MypageContent";
import MypageProfile from "./MypageProfile";
import "./Mypage.css";

const SERVER_IP = process.env.REACT_APP_SERVER_IP;

function Mypage() {
  const [activeTab, setActiveTab] = useState("posts");
  const [data, setData] = useState([]);
  const [userInfo, setUserInfo] = useState(null); // 사용자 정보 상태 추가

  const fetchData = async (endpoint) => {
    try {
      const response = await axios.get(`${SERVER_IP}/${endpoint}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // 사용자 정보를 가져오는 함수
  const fetchUserInfo = async () => {
    try {
      const token = localStorage.getItem("token"); // 저장된 JWT 토큰 가져오기

      if (!token) {
        alert("로그인이 필요합니다.");
        return;
      }

      const response = await fetch(`${SERVER_IP}/user/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // JWT 토큰 전달
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status code: ${response.status}`);
      }

      const data = await response.json();
      setUserInfo(data); // 사용자 정보 저장
    } catch (error) {
      console.error("Error fetching user info:", error);
      alert("사용자 정보를 가져오는 데 실패했습니다.");
    }
  };

  useEffect(() => {
    if (activeTab === "posts") {
      fetchData("user/posts");
    } else if (activeTab === "comments") {
      fetchData("user/comments");
    } else if (activeTab === "likes") {
      fetchData("user/likes");
    }
  }, [activeTab]);

  return (
    <div className="profile-page">
      <MypageProfile userInfo={userInfo} /> {/* Replace the header section */}
      <MypageTab activeTab={activeTab} setActiveTab={setActiveTab} />
      <MypageContent data={data} />
    </div>
  );
}

export default Mypage;
