import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

import "./NewPostForm.css";
import { MdPermMedia } from "react-icons/md";
import { RiVideoUploadFill } from "react-icons/ri";
import { MdWifiTethering } from "react-icons/md";

import { MdCancel } from "react-icons/md";

import axios from "axios";

const NewPostForm = () => {
  const { user } = useContext(AuthContext);
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;

  const description = useRef();

  const [file, setFile] = useState(null);

  const AddPost = async (e) => {
    // e.preventDefault()
    const NewPost = {
      userId: user._id,
      description: description.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      NewPost.img = fileName;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      await axios.post("postusers/post", NewPost);
      window.location.reload();
    } catch (err) {}
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={
              user.profilePicture
                ? pf + user.profilePicture
                : pf + "userprofile.png"
            }
            alt="ProfilePicture"
          />
          <input
            placeholder={"What do you have " + user.username + "?"}
            className="shareInput"
            ref={description}
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <MdCancel
              className="shareCancelImg"
              onClick={() => setFile(null)}
            />
          </div>
        )}
        <div className="shareBottom">
          <div className="shareOptions">
            <label htmlFor="file" className="shareoption">
              <MdPermMedia className="shareIcon" />
              <span className="shareOptionText">Picture</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
          </div>
          <div className="shareOptions">
            <div className="shareoption">
              <RiVideoUploadFill className="shareIcon" />
              <span className="shareOptionText">Video</span>
            </div>
          </div>
          <div className="shareOptions">
            <div className="shareoption">
              <MdWifiTethering className="shareIcon" />
              <span className="shareOptionText">Go Live</span>
            </div>
          </div>
          <button onClick={AddPost} className="shareButton">
            Add Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPostForm;
