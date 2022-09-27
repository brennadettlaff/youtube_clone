import React, { useState } from 'react';
import Reply from '../Reply/Reply';

const ReplyForm = (props) => {
    
    return ( 
        <form onSubmit={handleSubmit} className='form-grid'>
            <label>User</label>
            <input type='text' placeholder="User..." style={{margin: '5px'}} value={title} onChange={(event) => setUser(event.target.value)} />
            <label>Text</label>
            <input type='text' placeholder="Text..." style={{margin: '5px'}} value={album} onChange={(event) => setText(event.target.value)} />
            <button type='submit' className='btn btn-secondary' style={{margin: '5px'}}>Add Song</button>
        </form>
     );
}
 
export default ReplyForm;