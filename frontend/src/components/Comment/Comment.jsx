import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoPlayer from '../VideoPlayer/VideoPlayer'; 
import CommentList from '../CommentList/CommentList';
import VideoPage from '../../pages/VideoPage/VideoPage';
import CommentForm from '../CommentForm/CommentForm';

const Comment = (props) => {
    
    // // Use Effect and async function will need to be moved to app.js file
    // useEffect(() => {
    //     getAllComments();
    // }, [])

    // async function getAllComments(){
    //     let response = await axios.get('http://127.0.0.1:8000/api/get-comment/<str:video_id>/')
    //     setComment(response.data);
    // }
    // //
    
    // // const [videoid, setVideo_id] = useState('');
    // // const [text, setText] = useState('');
    // // const [likes, setLikes] = useState('');
    // // const [dislikes, setDislikes] = useState('');

    // const handleChange = (event) => {
    //     // setComment(event.currentTarget.value)
    // }

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     const newComment = {
    //         user: user,
    //         Comment: Comment,
    //         videoid: videoId,
    //     }
        
    //     console.log(newComment)
    //     axios.post('http://127.0.0.1:8000/api/create/')
    //     props.addNewCommentProperty(newComment)
    // }


    // console.log(newComment)
    // axios.post('http://127.0.0.1:8000/api/create/')
    // props.addNewCommentProperty(newComment)


    const [entries, setComment] = useState([]);

    useEffect(() => {
        getAllComments();
    }, [])

    async function getAllComments(){
        let response = await axios.get('http://localhost:3000/videopage/lEC3m-zpUuM/')
        setComment(response.data)
    }

    async function addNewComment(newComment){
        let response = await axios.post('http://localhost:3000/videopage/lEC3m-zpUuM/', newComment)
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