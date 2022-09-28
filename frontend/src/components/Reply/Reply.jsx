import React, { useState, useEffect } from 'react';
import ReplyForm from '../ReplyForm/ReplyForm';
import ReplyList from '../ReplyList/ReplyList';

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

    const [entries, setReply] = useState([]);

    useEffect(() => {
        getAllReplies();
    }, [])

    async function getAllReplies(){
        let response = await axios.get('http://localhost:3000/videopage/lEC3m-zpUuM/')
        setReply(response.data)
    }

    async function addNewReply(newReply){
        let response = await axios.post('http://localhost:3000/videopage/lEC3m-zpUuM/', newReply)
        if(response.status === 201){
            await getAllReplies();
        }
    }

    return ( 
        <div>
            <ReplyForm addNewReply={addNewReply} />
            <h1>Replies</h1>
            <ReplyList parentReplies={entries} />
        </div>
     );
}
 
export default Reply;