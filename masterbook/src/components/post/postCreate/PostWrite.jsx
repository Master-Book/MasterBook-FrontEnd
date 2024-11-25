import React, { useState, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "./PostWrite.css";

function PostWrite() {
  const SERVER_IP = process.env.REACT_APP_SERVER_IP;
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState(""); // 에디터의 내용을 저장하는 상태
  const { gameId, characterId } = useParams();
  const [authorId, setAuthorId] = useState(null);
  const editorRef = useRef();

  useEffect(() => {
    console.log("characterId:", characterId);
    console.log("gameId:", gameId);
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

    // 전송할 정보
    const payload = {
      title: title.trim(),
      authorId: authorId,
      content: content.trim(),
      gameId: gameId || "defaultGameId", // Fallback in case gameId is undefined
      characterId: characterId || "defaultCharacterId", // Fallback in case characterId is undefined
    };

    console.log("Payload:", payload);

    fetch(`${SERVER_IP}/writePost`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`, //토큰 가져오기
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status code: ${res.status}`);
        }
        console.log("서버로부터 받은 사용자 정보:", res.data);
        setAuthorId(res.data.id); // 서버에서 받은 ID 설정
        return res.json();
      })
      .then((json) => {
        if (json.success) {
          alert("글 작성 완료");
          navigate(`/${gameId}/${characterId}`);
        } else {
          alert("글 작성 실패");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("오류가 발생했습니다.");
      });
  };

  return (
    <div id="PostWrite">
      <div id="write_area">
        <h2>
          {gameId} - {characterId}
        </h2>
        {/* <form encType="multipart/form-data" action="/write_ok" method="post"> */}
        <textarea
          id="title"
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
