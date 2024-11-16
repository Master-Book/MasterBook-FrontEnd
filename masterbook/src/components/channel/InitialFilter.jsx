import React, { useState } from 'react';
import './InitialFilter.css';

function InitialFilter({
  onSelectInitial,
  selectedInitial,
  onSearch,
  onWritePost,
}) {
  const initials = [
    '전체',
    'ㄱ',
    'ㄴ',
    'ㄷ',
    'ㄹ',
    'ㅁ',
    'ㅂ',
    'ㅅ',
    'ㅇ',
    'ㅈ',
    'ㅊ',
    'ㅋ',
    'ㅌ',
    'ㅍ',
    'ㅎ',
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const handleInitialClick = (initial) => {
    setSearchTerm(''); // 검색어 초기화
    onSelectInitial(initial === '전체' ? '전체' : initial);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="initial-filter-container">
      <div className="initial-buttons">
        {initials.map((initial) => (
          <button
            key={initial}
            className={`initial-button ${
              selectedInitial === initial ? 'selected' : ''
            }`}
            onClick={() => handleInitialClick(initial)}
          >
            {initial}
          </button>
        ))}
      </div>

      {/* 검색어 입력 란을 필터 글자 아래로 이동 */}
      <div className="search-container">
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
    </div>
  );
}

export default InitialFilter;
