// src/components/post/PostCreate.js

import React from "react";

function PostCreate() {
  return (
    <div>
      <h1>postCreate</h1>
      <h4>글을 작성하는 공간입니다.</h4>
      <div id="write_area">
        <form encType="multipart/form-data" action="/write_ok" method="post">
          <div id="in_title">
            <textarea
              name="title"
              id="utitle"
              rows="1"
              cols="55"
              placeholder="제목"
              maxLength="100"
              required
            ></textarea>
          </div>
          <input type="file" name="SelectFile" />

          <div className="wi_line"></div>
          <div id="in_content">
            <textarea
              name="content"
              id="ucontent"
              placeholder="내용"
              required
            ></textarea>
          </div>

          <button type="submit">글 작성</button>
        </form>
      </div>
    </div>
  );
}

export default PostCreate;
