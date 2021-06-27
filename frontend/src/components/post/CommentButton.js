import React from 'react'
import {IoChatboxEllipsesOutline} from "react-icons/io5"

const CommentButton = () => {
    return (
        <div>
            <div className="commentIconStyle">
                <IoChatboxEllipsesOutline style={{fontSize:"28px", cursor:"pointer", marginLeft:"8px"}}/>
            </div>
        </div>
    )
}

export default CommentButton
