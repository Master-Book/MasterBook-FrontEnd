// src/components/mypage/MypageProfile.js
import React from "react";
import "./MypageProfile.css";

function MypageProfile({ userInfo }) {
  return (
    <div className="profile-header">
      <div className="profile-image">
        <img src="/path/to/profile-image.png" alt="프로필 이미지" />
      </div>
      <div className="profile-info">
        <h1 className="profile-name">{userInfo.nickname}</h1>
        <p className="profile-stats">작성한 공략 12,345</p>
        <button className="edit-profile-button">내정보 수정</button>
      </div>
    </div>
  );
}

export default MypageProfile;
