import React, { useState } from 'react';
import Reply from '../Reply/Reply';
import Comment from '../Comment/Comment';
import ReplyList from '../ReplyList/ReplyList';

const ReplyForm = (props) => {
    
    const [user, setUser] = useState('');
    const [comment_id, setComment_id] = useState('');
    const [text, setText] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newReply = {
            user: user,
            comment_id: comment_id,
            text: text,
        }
        
    }

    return ( 
        <form onSubmit={handleSubmit} className='form-grid'>
            <div>
                <label>User</label>
                <input type='text' placeholder="User..." style={{margin: '5px'}} value={user} onChange={(event) => setUser(event.target.value)} />
            </div>
            <div>
                <label>Reply</label>
                <input type='text' placeholder="Reply..." style={{margin: '5px'}} value={reply} onChange={(event) => setReply(event.target.value)} />
            </div>
            <button type='submit' className='btn btn-secondary' style={{margin: '5px'}}>Add Comment</button>
        </form>
     );
}
 
export default ReplyForm;