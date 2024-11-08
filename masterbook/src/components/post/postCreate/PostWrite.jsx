import React, { useState, useRef, useEffect } from "react";
import "./PostCreate.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useLocation } from "react-router-dom";
import { Editor } from "@toast-ui/react-editor";

function PostWrite() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(""); // 에디터의 내용을 저장하는 상태

  const location = useLocation();
  const { characterId, gameId } = location.state || {}; // 서버에 넘겨줄 Id들
  const editorRef = useRef();

  useEffect(() => {
    console.log(characterId);
    console.log(gameId);
  }, [characterId, gameId]);
  
  
  // toast UI 빈화면 출력을 위해
  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(""); // 에디터 초기 텍스트를 빈 문자열로 설정
  }, []);

  const handleFocus = () => {
    const editorInstance = editorRef.current.getInstance();
    if (editorInstance.getMarkdown() === "") {
      editorInstance.setMarkdown(""); // 포커스 시 빈 문자열로 유지
    }
  };

  // 글 title 저장
  const handleTitleChange = (e) => {
    const data = e.target.value;
    setTitle(data);
    // console.log(title);
  };

  // 글 내용(Content) 저장
  const handleContentChange = () => {
    const editorInstance = editorRef.current.getInstance();
    const data = editorInstance.getMarkdown();
    setContent(data);
  };

  // 글쓰기 버튼 작동
  const handleSubmit = (e) => {
    if (!content.trim()) {
      e.preventDefault(); // 내용이 비어 있으면 제출 방지
      alert("내용을 입력해주세요."); // 경고 메시지
    }
    /*
    TODO: 전송 버튼 누르면,
    - gameId (ex. league_of_legends)
    - characterId (ex. Garen)
    - title (글 제목)
    - authorId (userId이지만, 지금 로그인 안되므로 하드코딩해)
    - content (글 내용)
    위 내용 payload 변수에 저장하게 만들어

    (그리고 나중에 서버 연동할 때 payload 보내주면 돼)
    */

    // 전송할 정보
    const payload = {
      gameId: gameId || "defaultGameId", // Fallback in case gameId is undefined
      characterId: characterId || "defaultCharacterId", // Fallback in case characterId is undefined
      title: title.trim(),
      authorId: 1,
      content: content.trim(),
    };
  
    console.log("Payload:", payload);
  };

  return (
    <div id="PostCreate">
      <div id="write_area">
        {/* <form encType="multipart/form-data" action="/write_ok" method="post"> */}
          {/* <div id="in_category" className="cont-select"></div> */}
            <textarea
              // name="title"
              id="utitle"
              rows="1"
              cols="60"
              placeholder="제목"
              maxLength="100"
              required
              value={title}
              onChange={handleTitleChange}
            ></textarea>
          <Editor
            ref={editorRef}
            height="500px"
            language="ko-KR"
            initialEditType="wysiwyg"
            onFocus={handleFocus}
            onChange={handleContentChange} // 에디터 내용이 변경될 때마다 호출
          />
          <button
            type="submit"
            className="btn-submit"
            onClick={handleSubmit} // 제출 버튼 클릭 시 확인
            disabled={!content.trim()} // 내용이 비어 있으면 버튼 비활성화
          >
            글 작성
          </button>
        {/* </form> */}
      </div>
    </div>
  );
}

export default PostWrite;
