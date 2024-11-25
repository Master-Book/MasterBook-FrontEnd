// src/components/post/postDetail/ValiditySection.js

import React from 'react';
import './ValiditySection.css';

function ValiditySection({
  validCount,
  invalidCount,
  onValidClick,
  onInvalidClick,
}) {
  return (
    <div className="validity-section">
      <p>이 공략이 현재 버전에 유효한가요?</p>
      <button className="valid-button" onClick={onValidClick}>
        유효함 ({validCount})
      </button>
      <button className="invalid-button" onClick={onInvalidClick}>
        유효하지 않음 ({invalidCount})
      </button>
    </div>
  );
}

export default ValiditySection;
