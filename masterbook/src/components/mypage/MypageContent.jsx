// src/components/mypage/MypageContent.js

import React from "react";
import "./MypageContent.css";

function MypageContent({ data, endpoint }) {
  return (
    <div className="profile-content">
      {data.length > 0 ? (
        data.map((item) => (
          <div key={item.postId} className="data-item">
            <div className="data-title">{item.title || item.content}</div>
            {/* endpoint가 comments가 아닐 때만 author 출력 */}
            {endpoint !== "comments" && (
              <div className="data-author">{item.author}</div>
            )}
            <div className="data-date">{item.date}</div>
          </div>
        ))
      ) : (
        <p className="no-data">데이터가 없습니다.</p>
      )}
    </div>
  );
}

export default MypageContent;
