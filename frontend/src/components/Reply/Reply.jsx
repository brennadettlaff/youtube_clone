import React, { useState, useEffect } from 'react';
import ReplyForm from '../ReplyForm/ReplyForm';
import ReplyList from '../ReplyList/ReplyList';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const Reply = (props) => {
    const [token] = useAuth();
    const [entries, setReply] = useState([]);

    let commentId = props.parentComment

    useEffect(() => {
        getAllReplies();
    }, [])

    async function getAllReplies(){
        let response = await axios.get(`http://127.0.0.1:8000/api/reply/view/${commentId}/`, {headers: {
            Authorization: "Bearer " + token,
          }})
        setReply(response.data)
    }

    async function addNewReply(newReply){
        let response = await axios.post('http://127.0.0.1:8000/api/reply/add/', newReply, {headers: {
            Authorization: "Bearer " + token,
          }})
        if(response.status === 201){
            await getAllReplies();
        }
    }

    const replyPass = {
        addReplyFunction: addNewReply,
        comId: commentId
    }

    return ( 
        <div>
            <ReplyForm addNewReply={replyPass} />
            <ReplyList parentReplies={entries} />
        </div>
     );
}
 
export default Reply;