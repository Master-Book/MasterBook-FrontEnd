import React from "react";

function InitialFilter({ onSelectInitial }) {
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
    <div>
      {initials.map((initial) => (
        <button key={initial} onClick={() => onSelectInitial(initial)}>
          {initial}
        </button>
      ))}
    </div>
  );
}

export default InitialFilter;
