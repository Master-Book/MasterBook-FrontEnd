// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/home/Main";
// import OtherComponent from './components/OtherComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/other" element={<OtherComponent />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
