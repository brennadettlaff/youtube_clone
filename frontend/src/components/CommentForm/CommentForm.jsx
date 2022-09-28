import React, { useState } from 'react';

const CommentForm = (props) => {
    
    const [comment, setComment] = useState('');
    const [likes, setLikes] = useState('');
    const [dislikes, setDislikes] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        const newComment = {
            video_id: "test",
            text: comment,
            likes: likes,
            dislikes: dislikes,
        };
        console.log(newComment)
        props.addNewComment(newComment)

    }

    return ( 
        <form onSubmit={handleSubmit} className='form-grid'>
            <div>
                <label>Comment</label>
                <input type='text' placeholder="Comment..." style={{margin: '5px'}} value={comment} onChange={(event) => setComment(event.target.value)} />
            </div>
            <button type='submit' className='btn btn-secondary' style={{margin: '5px'}}>Add Comment</button>
    </form>
     );
}
 
export default CommentForm;