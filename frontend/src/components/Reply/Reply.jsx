import React, { useState } from 'react';

const Reply = (props) => {
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