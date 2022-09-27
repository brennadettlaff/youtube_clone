const CommentList = (props) => {
    return ( 
        <table>
            <thead>
                <tr>
                    <th>User</th>
                    <th>Text</th>
                </tr>
            </thead>
            <tbody>
            {props.parentComments.map((comment) => {
                return (
                <tr>
                    <td>{comment.user}</td>
                    <td>{comment.text}</td>
                </tr>
                );
                
            })}
            </tbody>
        </table>
     );
}
 
export default CommentList;