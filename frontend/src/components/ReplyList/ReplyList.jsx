const ReplyList = (props) => {
    return ( 
        <table>
            <thead>
                <tr>
                    <th>User</th>
                    <th>Text</th>
                </tr>
            </thead>
            <tbody>
            {props.parentReplies.map((reply) => {
                return (
                <tr>
                    <td>{reply.user}</td>
                    <td>{reply.text}</td>
                </tr>
                );
            })}
            </tbody>
        </table>
     );
}
 
export default ReplyList;