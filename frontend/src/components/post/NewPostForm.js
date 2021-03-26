import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'
import { useDispatch ,} from "react-redux"
import { addPost } from "../../JS/action/Post.action";
import './NewPostForm.css'





const NewPostForm = () => {


    const dispatch = useDispatch();



    const [message, setMessage] = useState("")

    const AddPost = () => {
        dispatch(addPost(message)
            // dispatch(getPosts()),
        )

    }



    return (
        <div>
            {/* <Form success>
                <Form.Input onChange={(e) => setMessage(e.target.value)}  label="Add Posts" id="message" name="message" placeholder='type here' />
                <Button onClick={AddPost}>Submit</Button>
            </Form> */}
            <div className="boxform">
                {/* <h1>Create Post</h1> */}
                <form>
                    <input onChange={(e) => setMessage(e.target.value)} className="inp" type="text" placeholder="create post here.." name="message" />
                    <button onClick={AddPost} className="inpt" type="submit" name="" value="Add">Add</button>
                </form>
            </div>

        </div>
    )
}

export default NewPostForm
