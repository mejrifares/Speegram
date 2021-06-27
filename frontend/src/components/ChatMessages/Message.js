import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {format} from "timeago.js"
import "./message.css"


const Message = ({message , own}) => {

    const { user } = useContext(AuthContext);


    const pf = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className={own? "message own" : "message"}>
            <div className="messageMiddle">
                <img 
                className="messageMiddleImg"
                src={user.profilePicture ? user.profilePicture : pf+"userprofile.png" }
                alt="profile img"
                />
                <p className="messageText">{message.text}</p>
            </div>
            <div className="messageHoure">{format(message.createdAt)}</div>
            
        </div>
    )
}

export default Message
