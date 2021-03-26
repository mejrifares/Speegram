import React, {useState, useEffect} from 'react'
import { Button, Icon, Label,} from 'semantic-ui-react';
import {useDispatch,useSelector } from "react-redux"
import { likePost } from '../../JS/action/Post.action';
// import {AppContext} from "../AppContext"



const LikeButton = ({post}) => {

    // const posts = useSelector((state) => state.postReducer);

    const loading = useSelector((state) => state.userReducer.loading);

    const [liked, setLiked] = useState(false);
    // const uid = useContext(AppContext);
    const dispatch = useDispatch();
  

    // const unlike = () => {
    //   dispatch(unlikePost(post._id))
    //   setLiked(false);
    // };
  
    // useEffect(() => {
    //   if (post.likers.includes(post._id)) setLiked(true);
    //   else setLiked(false);
    // }, [post.likers, liked]);

    const like = () => {
        dispatch(likePost(post._id))
      
        setLiked(true);
        
      };
    
    return (
        <div>
            <Button as='div' labelPosition='right'>
                
                <Button onClick={like} color='red' basic>
                    <Icon name='heart' />
                </Button>
            <Label basic color='red' pointing='left'>
                <span>{post.likers.length}</span>
                </Label>
            
            </Button>
        </div>
    )
}

export default LikeButton
