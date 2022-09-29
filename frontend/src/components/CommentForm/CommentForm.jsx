import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const CommentForm = (props) => {
    let vidId = useParams().videoId
    console.log(vidId)
    const [comment, setComment] = useState('');
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    function handleSubmit(event) {
        event.preventDefault();
        const newComment = {
            video_id: vidId,
            text: comment,
            likes: likes,
            dislikes: dislikes,
        };
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