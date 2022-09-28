import Comment from "../Comment/Comment";

const CommentList = (props) => {
    debugger
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
            {props.parentComments.map((comment) => {
                return (
                <tr>
                    <td>{comment.user}</td>
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