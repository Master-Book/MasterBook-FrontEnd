import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@toast-ui/editor/dist/toastui-editor.css";

import Header from "./components/common/Header";
import Home from "./components/home/Main";
import Channel from "./components/channel/Main";
import PostList from "./components/post/postList/PostList";
//import PostCreate from "./components/post/postCreate/PostCreate";
import PostWrite from "./components/post/postCreate/PostWrite";
import Login from "./components/login/Main";
import Signup from "./components/login/Signup";
import More from "./components/more/Main";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:gameId" element={<Channel />} />
        <Route path="/postList" element={<PostList />} />
        {/*<Route path="/postCreate" element={<PostCreate />} />*/}
        <Route path="/postWrite" element={<PostWrite />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </Router>
  );
}

export default App;
