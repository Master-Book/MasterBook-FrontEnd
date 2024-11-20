import React, {useState} from 'react';

function CommentForm(){
    const [input, setInput] = useState('');
    const [commenList, setCommentList] = useState(data)

    const handleAddComment = () => {
        if(input !== ''){
            const lastCmtIndex = commenLists.length - 1;
            const addedCmtId = commentLists[lastCmtIndex].id +1;
            const newComment = {
                id: addedCmtId,
                username: 'bb',
                content: input,
            };
            setCommentLists([...commentLists, newComment]);
            setInput('');
        }
    };
    

    return(
        <div className="comments-section">
        <h3>댓글</h3>
        <ul>
        {comments.map((comment) => (
            <li key={comment.id}>
            <p>
                <strong>{comment.author}</strong>: {comment.content}
            </p>
            </li>
        ))}
        </ul>
        <input
        type="text"
        placeholder="댓글을 입력하세요..."
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => (e.key === 'Enter' ? addComment() : null)}
        />
        <button onClick={handleAddComment} disabled="">댓글 달기</button>
    </div>
    );
    
}

export default CommentForm;