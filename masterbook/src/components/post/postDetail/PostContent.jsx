// src/components/post/postDetail/PostContent.js

import React from 'react';
import './PostContent.css';
import { Viewer } from '@toast-ui/react-editor';

function PostContent({ content }) {
  return (
    <div className="post-detail-content">
      <Viewer initialValue={content} /> {/* ToastUI Viewer로 콘텐츠 표시 */}
    </div>
  );
}

export default PostContent;
