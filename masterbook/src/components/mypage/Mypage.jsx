// src/components/mypage/Mypage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Mypage.css";

const SERVER_IP = process.env.REACT_APP_SERVER_IP;

function Mypage() {
  const [activeTab, setActiveTab] = useState("posts"); // 현재 활성화된 탭
  const [data, setData] = useState([]); // 출력할 데이터

  const fetchData = async (endpoint) => {
    try {
      const response = await axios.get(`${SERVER_IP}/${endpoint}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // JWT 토큰
        },
      });
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (activeTab === "posts") {
      fetchData("user/posts"); // 작성한 공략 API
    } else if (activeTab === "comments") {
      fetchData("user/comments"); // 내가 쓴 댓글 API
    } else if (activeTab === "likes") {
      fetchData("user/likes"); // 좋아요 누른 공략 API
    }
  }, [activeTab]);

  return (
    <div className="profile-page">
      {/* 프로필 상단 */}
      <div className="profile-header">
        <div className="profile-image">
          <img src="/path/to/profile-image.png" alt="프로필 이미지" />
        </div>
        <div className="profile-info">
          <h1 className="profile-name">무지개말랑콩떡</h1>
          <p className="profile-stats">작성한 공략 12,345</p>
          <button className="edit-profile-button">내정보 수정</button>
        </div>
      </div>

      {/* 탭 메뉴 */}
      <div className="profile-container">
        <div className="profile-tab-buttons">
          <button
            className={`profile-tab-button ${
              activeTab === "posts" ? "active" : ""
            }`}
            onClick={() => setActiveTab("posts")}
          >
            작성한 공략
          </button>
          <button
            className={`profile-tab-button ${
              activeTab === "comments" ? "active" : ""
            }`}
            onClick={() => setActiveTab("comments")}
          >
            내가 쓴 댓글
          </button>
          <button
            className={`profile-tab-button ${
              activeTab === "likes" ? "active" : ""
            }`}
            onClick={() => setActiveTab("likes")}
          >
            좋아요 누른 공략
          </button>
        </div>

        {/* 게시글 리스트 */}
        <div className="post-list-container">
          {activeTab === "posts" &&
            data.map((post) => (
              <div key={post.id} className="data-item">
                <span className="data-title">{post.title}</span>
                <span className="data-author">{post.author}</span>
                <span className="data-date">{post.date}</span>
              </div>
            ))}

          {activeTab === "comments" &&
            data.map((comment) => (
              <div key={comment.id} className="data-item">
                <span className="data-content">{comment.content}</span>
                <span className="data-author">{comment.author}</span>
                <span className="data-date">{comment.date}</span>
              </div>
            ))}

          {activeTab === "likes" &&
            data.map((like) => (
              <div key={like.id} className="data-item">
                <span className="data-title">{like.title}</span>
                <span className="data-author">{like.author}</span>
                <span className="data-date">{like.date}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Mypage;
