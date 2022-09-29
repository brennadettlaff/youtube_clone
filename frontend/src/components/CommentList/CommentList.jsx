import React from 'react';
import useAuth from '../../hooks/useAuth';

const CommentList = (props) => {
    const [user, token] = useAuth();
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
                    <td>{user.username}</td>
                    <td>{comment.text}</td>
                </tr>
                );
                
            })}
            </tbody>
        </table>
        </>
     );
}
 
export default CommentList;