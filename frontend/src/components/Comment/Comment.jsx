import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoPlayer from '../VideoPlayer/VideoPlayer'; 

const Comment = (props) => {
    
    // Use Effect and async function will need to be moved to app.js file
    useEffect(() => {
        getAllComments();
    }, [])

    async function getAllComments(){
        let response = await axios.get('http://127.0.0.1:8000/api/get-comment/<str:video_id>/')
        setComments(response.data);
    }
    //
    const [Comment, setComment] = useState('');
    // const [user, setUser] = useState('');
    // const [video_id, setVideo_id] = useState('');
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
            video_id: props.testVideo,
        }
        
        console.log(newComment)
        axios.post('http://127.0.0.1:8000/api/create/')
        props.addNewCommentProperty(newComment)
    }
    
    return ( 
        <div>
            Comment
        </div>
     );
}
 
export default Comment;