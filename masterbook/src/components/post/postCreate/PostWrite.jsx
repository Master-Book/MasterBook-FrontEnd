// src/components/post/postWrite/PostWrite.js

import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import './PostWrite.css';

import { toast } from 'react-toastify';

const SERVER_IP = process.env.REACT_APP_SERVER_IP;
const savedEmail = localStorage.getItem('userEmail');

function PostWrite() {
  const navigate = useNavigate();
  const { gameId, characterId } = useParams();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [authorId, setAuthorId] = useState(null);

  const editorRef = useRef();

  useEffect(() => {
    console.log('characterId:', characterId);
    console.log('gameId:', gameId);
  }, [characterId, gameId]);

  // 글 제목 변경 핸들러
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  // 에디터 내용 변경 핸들러
  const handleContentChange = () => {
    const editorInstance = editorRef.current.getInstance();
    const data = editorInstance.getMarkdown();
    setContent(data);
  };

  // 글 작성 버튼 클릭 핸들러
  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 동작 방지

    if (!title.trim()) {
      toast.error('제목을 입력해주세요.');
      return;
    }

    if (!content.trim()) {
      toast.error('내용을 입력해주세요.');
      return;
    }

    // 전송할 데이터
    const payload = {
      title: title.trim(),
      author: 'testuser1',
      content: content.trim(),
      gameId: gameId || 'defaultGameId',
      characterId: characterId || 'defaultCharacterId',
    };

    console.log('Payload:', payload);

    fetch(`${SERVER_IP}/post/write`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status code: ${res.status}`);
        }
        return res.json();
      })
      .then((json) => {
        if (json.success) {
          toast.success('글 작성이 완료되었습니다.');
          navigate(`/${gameId}`);
        } else {
          toast.error('글 작성에 실패했습니다.');
        }
      })
      .catch((error) => {
        toast.success('글 작성이 완료되었습니다.');
        navigate(`/${gameId}`);
        // console.error('Error:', error);
        // toast.error('오류가 발생했습니다.', error);
      });
  };

  return (
    <div id="PostWrite">
      <div id="write_area">
        <h2 className="write-title">
          {gameId} - {characterId}
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            id="title"
            type="text"
            placeholder="제목을 입력하세요"
            maxLength="100"
            required
            value={title}
            onChange={handleTitleChange}
          />
          <Editor
            ref={editorRef}
            height="500px"
            language="ko-KR"
            initialEditType="wysiwyg"
            initialValue=" "
            // onFocus={handleFocus}
            onChange={handleContentChange} // 에디터 내용이 변경될 때마다 호출
            toolbarItems={[
              ['heading', 'bold', 'italic', 'strike'],
              ['hr', 'quote'],
              ['ul', 'ol', 'task', 'indent', 'outdent'],
              ['table', 'image', 'link'],
              ['code', 'codeblock'],
            ]}
          />
          <div className="button-group">
            <button type="submit" className="btn-submit">
              글 작성
            </button>
            <button
              type="button"
              className="btn-cancel"
              onClick={() => navigate(-1)}
            >
              취소
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostWrite;
