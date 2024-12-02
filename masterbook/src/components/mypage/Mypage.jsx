// src/components/mypage/Mypage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import MypageTab from "./MypageTab";
import MypageContent from "./MypageContent";
import MypageProfile from "./MypageProfile";
import "./Mypage.css";

const SERVER_IP = process.env.REACT_APP_SERVER_IP;

function Mypage() {
  const [activeTab, setActiveTab] = useState("posts");
  const [data, setData] = useState([]);

  const fetchData = async (endpoint) => {
    try {
      const response = await axios.get(`${SERVER_IP}/${endpoint}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (activeTab === "posts") {
      fetchData("user/posts");
    } else if (activeTab === "comments") {
      fetchData("user/comments");
    } else if (activeTab === "likes") {
      fetchData("user/likes");
    }
  }, [activeTab]);

  return (
    <div className="profile-page">
      <MypageProfile /> {/* Replace the header section */}
      <MypageTab activeTab={activeTab} setActiveTab={setActiveTab} />
      <MypageContent data={data} />
    </div>
  );
}

export default Mypage;
