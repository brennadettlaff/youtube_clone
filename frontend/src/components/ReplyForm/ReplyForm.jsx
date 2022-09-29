import React, { useState } from 'react';
import Reply from '../Reply/Reply';
import Comment from '../Comment/Comment';
import ReplyList from '../ReplyList/ReplyList';

const ReplyForm = (props) => {
    
    const [reply, setReply] = useState('');


    function handleSubmit(event) {
        event.preventDefault();
        const newReply = {
            comment: props.addNewReply.comId,
            text: reply,
        };
        console.log(newReply)
        props.addNewReply.addReplyFunction(newReply)
    }

    return ( 
        <form onSubmit={handleSubmit} className='form-grid'>
            <div>
                <input type='text' placeholder="Reply..." style={{margin: '5px'}} value={reply} onChange={(event) => setReply(event.target.value)} />
            </div>
            <button type='submit' className='btn btn-secondary' style={{margin: '5px'}}>Reply</button>
        </form>
     );
}
 
export default ReplyForm;