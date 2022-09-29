import React, { useState } from 'react';

const ReplyForm = (props) => {
    
    const [reply, setReply] = useState('');


    function handleSubmit(event) {
        event.preventDefault();
        const newReply = {
            comment_id: props.addNewReply.comId,
            text: reply,
        };
        console.log(newReply)
        props.addNewReply.addReplyFunction(newReply)
    }

    return ( 
        <form onSubmit={handleSubmit} className='form-grid'>
            <div>
                <input type='text' class='form-control input-lg' placeholder="Reply..." style={{margin: '5px'}} value={reply} onChange={(event) => setReply(event.target.value)} />
            </div>
            <button type='submit' style={{margin: '5px'}}>Reply</button>
        </form>
     );
}
 
export default ReplyForm;