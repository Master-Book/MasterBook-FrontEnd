import React from "react";
import "./InitialFilter.css"; // CSS 파일을 임포트합니다.

function InitialFilter({ onSelectInitial, selectedInitial }) {
  const initials = [
    "ㄱ",
    "ㄴ",
    "ㄷ",
    "ㄹ",
    "ㅁ",
    "ㅂ",
    "ㅅ",
    "ㅇ",
    "ㅈ",
    "ㅊ",
    "ㅋ",
    "ㅌ",
    "ㅍ",
    "ㅎ",
  ];

  return (
    <div className="initial-filter-container">
      {initials.map((initial) => (
        <button
          key={initial}
          className={`initial-button ${
            selectedInitial === initial ? "selected" : ""
          }`}
          onClick={() => onSelectInitial(initial)}
        >
          {initial}
        </button>
      ))}
    </div>
  );
}

export default InitialFilter;
