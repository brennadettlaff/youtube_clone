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
        let response = await axios.get('http://127.0.0.1:8000/api/comment/get-comment/1s58rW0_LN4', {
            headers: {
                Authorization: "Bearer " + token,
              },
        })
        console.log(response.data)
        debugger
        setComment(response.data)
    }

    async function addNewComment(newComment){
        let response = await axios.post('http://127.0.0.1:8000/api/comment/create/', newComment,  {headers: {
            Authorization: "Bearer " + token,
          }})
        if(response.status === 201){
            await getAllComments();
        }
    }
    
    return ( 
        <div>
            <CommentForm addNewComment={addNewComment}/>
            <h1>Comments</h1>
            <CommentList parentEntries={entries}/>

        </div>
     );
}
 
export default Comment;