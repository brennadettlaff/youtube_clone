import React, { useState } from 'react';
import Reply from '../Reply/Reply';
import Comment from '../Comment/Comment';
import ReplyList from '../ReplyList/ReplyList';

const ReplyForm = (props) => {
    
    const [reply, setReply] = useState('');
    const [comment_id, setComment_id] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        const newReply = {
            comment_id: comment_id,
            text: text,
        };
        console.log(newReply)
        props.addNewReply(newReply)
        
    }

    return ( 
        <form onSubmit={handleSubmit} className='form-grid'>
            <div>
                <label>Reply</label>
                <input type='text' placeholder="Reply..." style={{margin: '5px'}} value={reply} onChange={(event) => setReply(event.target.value)} />
            </div>
            <button type='submit' className='btn btn-secondary' style={{margin: '5px'}}>Add Comment</button>
        </form>
     );
}
 
export default ReplyForm;