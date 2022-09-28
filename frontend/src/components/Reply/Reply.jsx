import React, { useState, useEffect } from 'react';

const Reply = (props) => {
    
    // // Use Effect and async function will need to be moved to app.js file
    // useEffect(() => {
    //     getAllReplies();
    // }, [])
    
    // async function getAllReplies(){
    //     let response = await axios.get('http://127.0.0.1:8000/api/view/<int:comment>/');
    //     setReplies(response.data);
    // }
    // //

    return ( 
        <div>
            <h1>Replies</h1>
            <ReplyForm />
        </div>
     );
}
 
export default Reply;