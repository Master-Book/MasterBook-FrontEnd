import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./components/home/Main";
import Channel from "./components/channel/Main";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:gameId" element={<Channel />} />
      </Routes>
    </Router>
  );
}

export default App;
