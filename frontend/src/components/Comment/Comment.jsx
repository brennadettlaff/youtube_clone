import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentList from '../CommentList/CommentList';
import CommentForm from '../CommentForm/CommentForm';
import useAuth from '../../hooks/useAuth';

const Comment = (props) => {
    const [user, token] = useAuth();
    const [entries, setComment] = useState([]);

    useEffect(() => {
        getAllComments();
    }, [])


    async function getAllComments(){
        let response = await axios.get('http://127.0.0.1:8000/api/comment/get-comment/test', {
            headers: {
                Authorization: "Bearer " + token,
              },
        })
        setComment(response.data)
    }

    async function addNewComment(newComment){
        let response = await axios.post('http://127.0.0.1:8000/api/comment/create/',  {headers: {
            Authorization: "Bearer " + token,
          }}, newComment)
        if(response.status === 201){
            await getAllComments();
        }
    }
    
    return ( 
        <div>
            <CommentForm addNewComment={addNewComment}/>
            <h1>Comments</h1>
            <CommentList parentComments={entries}/>

        </div>
     );
}
 
export default Comment;