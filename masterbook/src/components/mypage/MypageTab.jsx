// src/components/mypage/MypageTab.js
import React from "react";
import "./MypageTab.css";

function MypageTab({ activeTab, setActiveTab }) {
  return (
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
  );
}

export default MypageTab;
