import React from 'react';
import Comment from "../Comment/Comment";
import { useParams } from "react-router-dom";

const CommentList = (props) => {
    return ( 
        <>
        <h1>test</h1>
        <table>
            <thead>
                <tr>
                    <th>User</th>
                    <th>Comment</th>
                </tr>
            </thead>
            <tbody>
            {props.parentEntries.map((comment) => {
                return (
                <tr>
                    <td>user</td>
                    <td>{comment.comment}</td>
                </tr>
                );
                
            })}
            </tbody>
        </table>
        </>
     );
}
 
export default CommentList;