import React, { useContext, useEffect, useState } from "react";
import "./postcard.css";

import axios from "axios";

// import LikeButton from "../post/LikeButton";
// import DeleteCard from "../post/DeleteCard";
// import EditPost from "../post/EditPost";
import { Link } from "react-router-dom";
import CommentButton from "./CommentButton";
import { format } from "timeago.js";
import { AuthContext } from "../../context/AuthContext";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdMoreHoriz } from "react-icons/md";

const PostCard = ({ post }) => {
  const [user, setUser] = useState({});

  const pf = process.env.REACT_APP_PUBLIC_FOLDER;
  const pf2 = process.env.REACT_APP_PUBLIC_FOLDER2;

  useEffect(() => {
    const fetchusers = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchusers();
  }, [post.userId]);

  // Likers
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);

  const { user: userLike } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(userLike._id));
  }, [userLike._id, post.likes]);

  const likersFun = () => {
    try {
      axios.put("/postusers/" + post._id + "/like", { userId: userLike._id });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={user.profilePicture || `${pf}userprofile.png`}
                alt="profile img"
              />
            </Link>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/profile/${user.username}`}
            >
              <span className="postUsername">{user.username}</span>
            </Link>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MdMoreHoriz style={{ fontSize: "25px", cursor: "pointer" }} />
          </div>
        </div>
        <div className="postCenter">
          <div className="postText">
            <span className="postTextValue">{post?.description}</span>
          </div>
          {/* <div style={{background: "#f0f2f5"}}> */}
          <img
            style={{ borderRadius: "5px", cursor: "pointer" }}
            className="postImg"
            src={pf2 + post.img}
            alt=""
          />
          {/* </div> */}
        </div>
        <div className="postBottom">
          <div className="postBottomItem">
            <div className="postBottomLeft">
              <div onClick={likersFun} className="likesIconStyle">
                {isLiked ? (
                  <IoMdHeartEmpty 
                  className="heartLiked"
                  style={{ fontSize: "30px", cursor: "pointer" }} />
                ) : (
                  <IoMdHeartEmpty
                    style={{ fontSize: "30px", cursor: "pointer" }}
                  />
                )}
              </div>
            </div>
            <div className="postBottomLeft">
              <CommentButton className="PostButtomIcon" />
            </div>

            {/* <div className="postBottomRight">
            <DeleteCard id={post._id} />
            <EditPost id={post._id} />
          </div> */}
          </div>
          <div className="postLikes">
            <span>{like}</span>
            Likes
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
