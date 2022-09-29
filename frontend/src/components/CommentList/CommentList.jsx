import React from 'react';
import Reply from '../Reply/Reply';
import useAuth from '../../hooks/useAuth';

const CommentList = (props) => {
    const [user, token] = useAuth();
    return ( 
        <>
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
                    <td>{user.username}</td>
                    <td>{comment.text}</td>
                    <Reply parentComment={comment.id}/>
                </tr>
                );
                
            })}
            </tbody>
        </table>
        </>
     );
}
 
export default CommentList;