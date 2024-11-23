// src/components/common/Layout.js

import React from 'react';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <aside className="sidebar left-sidebar">
        {/* 왼쪽 광고 영역 */}
        <div className="ad">광고 영역 1</div>
      </aside>
      <main className="content">{children}</main>
      <aside className="sidebar right-sidebar">
        {/* 오른쪽 광고 영역 */}
        <div className="ad">광고 영역 2</div>
      </aside>
    </div>
  );
};

export default Layout;
