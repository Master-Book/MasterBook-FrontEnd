import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@toast-ui/editor/dist/toastui-editor.css';

import Layout from './components/common/Layout';

import Header from './components/common/Header';
import Home from './components/home/Main';
import Channel from './components/channel/Main';
import PostList from './components/post/postList/PostList';
import PostWrite from './components/post/postCreate/PostWrite';
import PostDetail from './components/post/postDetail/PostDetail';
import Login from './components/login/Main';
import Signup from './components/login/Signup';
import More from './components/more/Main';
import Contact from './components/contact/contactMain';

// Admin
import AdminLogin from './components/login/adminLogin';
import AdminDashboard from './components/Admin/adminDashboard';

// toastify
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Header />
      {/* <Layout> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:gameId" element={<Channel />} />
        <Route path="/postList" element={<PostList />} />
        <Route path="/postWrite/:gameId/:characterId" element={<PostWrite />} />
        <Route path="/:gameId/:characterId/:postId" element={<PostDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/more" element={<More />} />
        <Route path="/contact" element={<Contact />} />
        {/* 어드민 로그인 페이지 */}
        <Route path="/admin/login" element={<AdminLogin />} />
        {/* 어드민 대시보드 */}
        <Route path="/admin/*" element={<AdminDashboard />} />
      </Routes>
      {/* </Layout> */}
      <ToastContainer
        position="top-right" // 알람 위치 지정
        autoClose={3000} // 자동 off 시간
        hideProgressBar={false} // 진행시간바 숨김
        closeOnClick // 클릭으로 알람 닫기
        rtl={false} // 알림 좌우 반전
        pauseOnFocusLoss // 화면을 벗어나면 알람 정지
        draggable // 드래그 가능
        // pauseOnHover // 마우스를 올리면 알람 정지
        theme="light"
        // limit={1} // 알람 개수 제한
      />
    </Router>
  );
}

export default App;
