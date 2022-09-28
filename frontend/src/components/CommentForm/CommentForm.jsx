import React, { useState } from 'react';
import Comment from '../Comment/Comment';

const CommentForm = (props) => {
    
    const [user, setUser] = useState('');
    const [comment, setComment] = useState('');
    const [videoId, setVideoId] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        const newComment = {
            user: user,
            comment: comment,
            videoId: videoId,
        }
        

    }

    return ( 
        <form onSubmit={handleSubmit} className='form-grid'>
            <div>
                <label>User</label>
                <input type='text' placeholder="User..." style={{margin: '5px'}} value={user} onChange={(event) => setUser(event.target.value)} />
            </div>
            <div>
                <label>Comment</label>
                <input type='text' placeholder="Comment..." style={{margin: '5px'}} value={comment} onChange={(event) => setComment(event.target.value)} />
            </div>
            <button type='submit' className='btn btn-secondary' style={{margin: '5px'}}>Add Comment</button>
    </form>
     );
}
 
export default CommentForm;