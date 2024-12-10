// src/components/mypage/Mypage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import MypageTab from "./MypageTab";
import MypageContent from "./MypageContent";
import MypageProfile from "./MypageProfile";
import "./Mypage.css";

const SERVER_IP = process.env.REACT_APP_SERVER_IP;

function Mypage() {
  const [activeTab, setActiveTab] = useState(null);
  const [data, setData] = useState([]);
  const [userInfo, setUserInfo] = useState({
    nickname: "Guest", // 기본값을 "Guest"로 설정
  });

  const fetchData = async (endpoint) => {
    try {
      const response = await axios.get(`${SERVER_IP}/mypage/${endpoint}`, {
        headers: {
          "Content-Type": "application/json",
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
      const response = await fetch(`${SERVER_IP}/mypage`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status code: ${response.status}`);
      }

      const data = await response.json();

      // 받은 데이터를 `userInfo` 상태에 저장
      setUserInfo((prev) => ({
        ...prev,
        nickname: data.nickname || "Guest",
      }));
    } catch (error) {
      console.error("Error fetching user info:", error);
      alert("사용자 정보를 가져오는 데 실패했습니다.");
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  useEffect(() => {
    if (activeTab === "posts") {
      fetchData("posts");
    } else if (activeTab === "comments") {
      fetchData("comments");
    } else if (activeTab === "likes") {
      fetchData("likes");
    }
  }, [activeTab]);

  return (
    <div className="profile-page">
      <MypageProfile userInfo={userInfo} />
      <MypageTab activeTab={activeTab} setActiveTab={setActiveTab} />
      <MypageContent data={data} endpoint={activeTab} />
    </div>
  );
}

export default Mypage;
