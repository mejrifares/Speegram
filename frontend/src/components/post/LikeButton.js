import React, {useState, useEffect, useContext} from 'react'
import "./postcard.css"
// import { Button, Icon, Label,} from 'semantic-ui-react';
// import {useDispatch,useSelector } from "react-redux"
// import { likePost } from '../../JS/action/Post.action';
import {IoMdHeartEmpty} from "react-icons/io"
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
// import {AppContext} from "../AppContext"



const LikeButton = ({post}) => {


    // const [liked, setLiked] = useState(false);
    // const dispatch = useDispatch();

    // const like = () => {
    //     dispatch(likePost(post._id))
      
    //     setLiked(true);
        
    //   };
    const [like, setLike] = useState(post.likes.length);
    const [isLiked, setIsLiked] = useState(false);

    const { user} = useContext(AuthContext);


    useEffect(() => {
        setIsLiked(post.likes.includes(user._id));
      }, [user._id, post.likes]);

      const likersFun = () => {
        try {
          axios.put("/postusers/" + post._id + "/like", { userId: user._id });
        } catch (err) {}
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
      };


    
    return (
        <div>
            <div className="likesIconStyle">
             <IoMdHeartEmpty onClick={likersFun}  style={{fontSize:"30px",cursor:"pointer"}} />
             <div className="postLikes">
             {/* <span>{like} likes</span> */}
             </div>
            </div>
        </div>
    )
}

export default LikeButton
