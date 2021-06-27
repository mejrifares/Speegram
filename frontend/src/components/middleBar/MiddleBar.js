import React, { useState, useEffect, useContext } from "react";
import NewPostForm from "../post/NewPostForm";
import PostCard from "../post/PostCard";
import "./middlebar.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
// import Stories from "../storie/Stories";

const MiddleBar = ({ username }) => {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/postusers/profile/" + username)
        : await axios.get("/postusers/postshome/"+ user._id);
      setPosts(res.data.sort((p1,p2) =>{
        return new Date(p2.createdAt) - new Date(p1.createdAt)
      }));
    };
    fetchPosts();
  }, [username, user._id]);

  return (
    <div className="middlebar">
      {/* <div className="middlebarStorie">

        

        

      </div> */}
      <div className="middlebarWrapper">
        {(!username || username === user.username) && <NewPostForm />}
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default MiddleBar;
