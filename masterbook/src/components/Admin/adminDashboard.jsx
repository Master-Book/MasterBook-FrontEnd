import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminHeader from './adminHeader';
import AdminSidebar from './adminSidebar';
import UserManagement from './userManagement';
import './adminDashboard.css';

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <AdminHeader />
      <div className="admin-main">
        <AdminSidebar />
        <div className="admin-content">
          <Routes>
            <Route path="users" element={<UserManagement />} />
            {/* 추가적인 관리 페이지 라우트 설정 */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
