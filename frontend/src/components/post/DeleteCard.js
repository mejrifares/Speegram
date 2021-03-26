import React from 'react'
import {Button , Icon} from "semantic-ui-react"
import {useDispatch , useSelector} from "react-redux"
import {DeletePost} from "../../JS/action/Post.action"

const DeleteCard = (post) => {

    // const posts = useSelector((state) => state.postReducer);
    const dispatch = useDispatch()

    const Delete = () => {

        dispatch (DeletePost(post.id))

    }



    return (
        <div onClick={() =>{
            if (window.confirm("are you sure you want delete this post ?")) {
                Delete()
            }
        }}>
            <Button  
            as="div"
            color='red'
            floated="right"
            >
                <Icon name='trash' style={{margin : 0 }} />
            </Button>
        </div>
    )
}

export default DeleteCard
