// src/components/post/PostCreate.js

import React, { useState } from "react";
import "./PostCreate.css";

function PostCreate() {
  // 카테고리 선택
  const [category, setCategory] = useState(""); // 선택된 카테고리 상태 관리
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 드롭다운 열림 상태 관리

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory); // 선택한 카테고리를 상태에 저장
    setIsDropdownOpen(false); // 선택 후 드롭다운 닫기
  };

  // 선택한 파일 이름 명시
  const [fileName, setFileName] = useState(""); // 선택한 파일 이름을 저장할 상태

  const handleFileChange = (e) => {
    setFileName(e.target.files[0]?.name || ""); // 파일 이름 저장
  };

  return (
    <div id="PostCreate">
      <div id="write_area">
        <form encType="multipart/form-data" action="/write_ok" method="post">
          <div id="in_category" className="cont-select">
            <button
              type="button"
              className={`btn-select ${isDropdownOpen ? "on" : ""}`}
              onClick={handleDropdownToggle}
            >
              {category || "카테고리를 선택하세요"}
            </button>
            {isDropdownOpen && (
              <ul className="list-category">
                <li>
                  <button
                    type="button"
                    onClick={() => handleCategorySelect("League of Legends")}
                  >
                    League of Legends
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleCategorySelect("Stardew Valley")}
                  >
                    Stardew Valley
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleCategorySelect("기타게임")}
                  >
                    기타게임
                  </button>
                </li>
                {/* 필요한 카테고리들을 추가 */}
              </ul>
            )}
          </div>
          <div className="file-input">
            <input
              type="file"
              name="file"
              id="file"
              onChange={handleFileChange}
            />
            {fileName && (
              <span className="file-name">선택된 파일: {fileName}</span>
            )}
          </div>
          <div id="in_title">
            <textarea
              name="title"
              id="utitle"
              rows="1"
              cols="55"
              placeholder="제목"
              maxLength="100"
              required
            ></textarea>
          </div>

          <div className="wi_line"></div>
          <div id="in_content">
            <textarea
              name="content"
              id="ucontent"
              placeholder="내용"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-submit">
            글 작성
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostCreate;
