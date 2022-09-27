import React, { useState } from 'react';

const Comment = (props) => {
    
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