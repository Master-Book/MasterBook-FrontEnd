// src/components/mypage/MypageContent.js
import React from "react";
import "./MypageContent.css";

function MypageContent({ data }) {
  return (
    <div className="profile-content">
      {data.length > 0 ? (
        data.map((item) => (
          <div key={item.id} className="data-item">
            {/* <div className="data-title">{item.title || item.content}</div>
            <div className="data-author">{item.author}</div>
            <div className="data-date">{item.date}</div> */}
            <div className="data-title">헤일리 이동 경로 및 시간</div>
            <div className="data-author">무지개말랑콩떡</div>
            <div className="data-date">2024.12.11</div>
          </div>
        ))
      ) : (
        <p className="no-data">데이터가 없습니다.</p>
      )}
    </div>
  );
}

export default MypageContent;
