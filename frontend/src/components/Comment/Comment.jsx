import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

    const [user, setUser] = useState('');
    const [video_id, setVideo_id] = useState('');
    const [text, setText] = useState('');
    const [likes, setLikes] = useState('');
    const [dislikes, setDislikes] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newComment = {
            user: user,
            video_id: video_id,
            text: text,
            likes: likes,
            dislikes: dislikes,
        }
        console.log(newComment)
        props.addNewCommentProperty(newComment)
    }
    
    return ( 
        console.log(newComment)
     );
}
 
export default Comment;