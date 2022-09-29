import React, { useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CommentForm.css'

const CommentForm = (props) => {
    let vidId = useParams().videoId
    const [id] = useState(0)
    const [comment, setComment] = useState('');
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    function handleSubmit(event) {
        event.preventDefault();
        const newComment = {
            id: id,
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
                <input type='text' class='form-control input-lg' placeholder="Comment..." style={{margin: '5px'}} value={comment} onChange={(event) => setComment(event.target.value)} />
            </div>
            <button type='submit' style={{margin: '5px'}}>Add Comment</button>
    </form>
     );
}
 
export default CommentForm;