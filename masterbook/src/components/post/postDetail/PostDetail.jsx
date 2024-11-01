// src/components/post/PostDetail.js

import React from "react";

function PostDetail() {
  return (
    <div>
      <div>
        {loading ? (
          <h2>loading...</h2>
        ) : (
          <Board
            idx={board.idx}
            title={board.title}
            contents={board.contents}
            createdBy={board.createdBy}
          />
        )}
      </div>
    </div>
  );
}

export default PostDetail;
