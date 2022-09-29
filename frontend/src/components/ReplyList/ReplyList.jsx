import React from "react";
import useAuth from "../../hooks/useAuth";

const ReplyList = (props) => {
    const [user, token] = useAuth();
    console.log(props)
    return ( 
        <table>
            <tbody>
            {props.parentReplies.map((reply) => {
                return (
                <tr>
                    <td>{user.username}</td>
                    <td>{reply.text}</td>
                </tr>
                );
            })}
            </tbody>
        </table>
     );
}
 
export default ReplyList;