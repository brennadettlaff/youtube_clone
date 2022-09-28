import React, { useState } from 'react';
import Comment from '../Comment/Comment';

const CommentForm = (props) => {
    
    const [Comment, setComment] = useState('');
    const [user, setUser] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        const newComment = {
            user: user,
            Comment: Comment,
            videoid: videoId,
        }
        
        console.log(newComment)
        axios.post('http://127.0.0.1:8000/api/create/')
        props.addNewCommentProperty(newComment)
    }

    return ( 
        <form onSubmit={handleSubmit} className='form-grid'>
        <label>User</label>
        <input type='text' placeholder="User..." style={{margin: '5px'}} value={user} onChange={(event) => setUser(event.target.value)} />
        <label>Comment</label>
        <input type='text' placeholder="Comment..." style={{margin: '5px'}} value={Comment} onChange={(event) => setComment(event.target.value)} />
        <button type='submit' className='btn btn-secondary' style={{margin: '5px'}}>Add Comment</button>
    </form>
     );
}
 
export default CommentForm;