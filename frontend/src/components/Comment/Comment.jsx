import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoPlayer from '../VideoPlayer/VideoPlayer'; 
import CommentList from '../CommentList/CommentList';
import VideoPage from '../../pages/VideoPage/VideoPage';
import CommentForm from '../CommentForm/CommentForm';

const Comment = (props) => {
    
    // Use Effect and async function will need to be moved to app.js file
    useEffect(() => {
        getAllComments();
    }, [])

    async function getAllComments(){
        let response = await axios.get('http://127.0.0.1:8000/api/get-comment/<str:video_id>/')
        setComment(response.data);
    }
    //
    
    // const [videoid, setVideo_id] = useState('');
    // const [text, setText] = useState('');
    // const [likes, setLikes] = useState('');
    // const [dislikes, setDislikes] = useState('');

    const handleChange = (event) => {
        // setComment(event.currentTarget.value)
    }

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
        <div>
            Comment
        {/* <form onSubmit={handleSubmit} className='form-grid'>
            <label>User</label>
            <input type='text' placeholder="User..." style={{margin: '5px'}} value={user} onChange={(event) => setUser(event.target.value)} />
            <label>Comment</label>
            <input type='text' placeholder="Comment..." style={{margin: '5px'}} value={Comment} onChange={(event) => setComment(event.target.value)} />
            <button type='submit' className='btn btn-secondary' style={{margin: '5px'}}>Add Comment</button>
        </form> */}
        </div>
     );
}
 
export default Comment;