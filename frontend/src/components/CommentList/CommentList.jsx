import React from 'react';
import Reply from '../Reply/Reply';
import useAuth from '../../hooks/useAuth';

const CommentList = (props) => {
    const [user] = useAuth();
    return ( 
        <>
        {/* <h1>test</h1> */}
        <div class="table-responsive">
            <table className="table table-hover table-borderless">
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
        </div>
        </>
     );
}
 
export default CommentList;