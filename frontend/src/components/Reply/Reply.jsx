import React, { useState, useEffect } from 'react';

const Reply = (props) => {
    
    // Use Effect and async function will need to be moved to app.js file
    useEffect(() => {
        getAllReplies();
    }, [])
    
    async function getAllReplies(){
        let response = await axios.get('http://127.0.0.1:8000/api/view/<int:comment>/');
        setReplies(response.data);
    }
    //

    const [user, setUser] = useState('');
    const [comment, setComment] = useState('');
    const [text, setText] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newReply = {
            user: user,
            comment: comment,
            text: text,
        }
        console.log(newReply)
        props.addNewReplyProperty(newReply)
    }

    return ( 
        console.log(newReply)
     );
}
 
export default Reply;