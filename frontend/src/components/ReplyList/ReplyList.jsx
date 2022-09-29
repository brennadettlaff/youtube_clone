import React from "react";
import useAuth from "../../hooks/useAuth";

const ReplyList = (props) => {
    const [user] = useAuth();
    console.log(props)
    return ( 
        <div class="table-responsive">
            <table className="table table-hover table-borderless">
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
        </div>
     );
}
 
export default ReplyList;