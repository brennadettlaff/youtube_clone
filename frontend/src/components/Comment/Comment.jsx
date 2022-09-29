import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CommentList from '../CommentList/CommentList';
import CommentForm from '../CommentForm/CommentForm';
import useAuth from '../../hooks/useAuth';

const Comment = () => {
    const [user, token] = useAuth();
    const [entries, setComment] = useState([]);

    let vidId = useParams().videoId

    useEffect(() => {
        getAllComments();
    }, [])


    async function getAllComments(){
        let response = await axios.get(`http://127.0.0.1:8000/api/comment/get-comment/${vidId}/`, {
            headers: {
                Authorization: "Bearer " + token,
              },
        })
        console.log(response.data)
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