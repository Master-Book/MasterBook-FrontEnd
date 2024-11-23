import React from 'react';
import { Link } from 'react-router-dom';
import './adminSidebar.css';

function AdminSidebar() {
  return (
    <nav className="admin-sidebar">
      <ul>
        <li>
          <Link to="/admin/users">사용자 관리</Link>
        </li>
        {/* 추가적인 메뉴 아이템 */}
      </ul>
    </nav>
  );
}

export default AdminSidebar;
