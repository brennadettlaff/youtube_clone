import React, { useState } from 'react';
import Comment from '../Comment/Comment';

const CommentForm = (props) => {
    return ( 
        <form onSubmit={handleSubmit} className='form-grid'>
            <label>User</label>
            <input type='text' placeholder="User..." style={{margin: '5px'}} value={user} onChange={(event) => setUser(event.target.value)} />
            <label>Text</label>
            <input type='text' placeholder="Text..." style={{margin: '5px'}} value={text} onChange={(event) => setText(event.target.value)} />
            <button type='submit' className='btn btn-secondary' style={{margin: '5px'}}>Add Comment</button>
        </form>
     );
}
 
export default CommentForm;