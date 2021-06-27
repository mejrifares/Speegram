import React, { useContext, useEffect, useState } from "react";
import "./Profile.css";
import Leftbar from "../leftbar/Leftbar";
import MiddleBar from "../middleBar/MiddleBar";
import Rightbar from "../rightbar/Rightbar";

import { HiOutlineMail } from "react-icons/hi";
import { ImImages } from "react-icons/im";
import { AiOutlineEdit } from "react-icons/ai";
import { RiUserReceived2Line, RiUserStarLine } from "react-icons/ri";

import ProfileHeader from "./ProfileHeader";
import Nav from "../Navbar/Nav";
import axios from "axios";
import { useParams } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

import { CircularProgress } from "@material-ui/core";

const Profile = () => {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const { user: currentUser, dispatch, isFetching } = useContext(AuthContext);
  const username = useParams().username;
  // const { user: userFolow } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );

  // useEffect(() => {
  //   setFollowed(currentUser.followings.includes(user?.id));
  // }, [currentUser.followings, user.id]);

  const HandleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {}
  };

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  const HandleSend = async () => {
    const NewConv = {
      senderId: user._id,
      receiverId: currentUser._id,
    };
    try {
      await axios.post("/conversation/", NewConv);
      window.location.replace("/messanger");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Nav />
      <div className="profile">
        <Leftbar />

        {/* <ProfileHeader/> */}

        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <div className="profileCoverAnimation">
                <ProfileHeader />
              </div>
              <img
                className="profileUserImg"
                src={`${pf}userprofile.png`}
                alt="profile img "
              />
              <div className="profileInfo infoBox">
                <div className="profileInfoHeader">
                  <h4 className="profileInfoName">{user.username}</h4>
                  {user.username !== currentUser.username && (
                    <button onClick={HandleClick} className="buttonFollowStyle">
                      {followed ? "Unfollow" : "Follow"}
                    </button>
                  )}
                </div>
                <div className="profileInfoFollow">
                  <span className="profileInfoFollowItem">
                    <RiUserReceived2Line
                      style={{ fontSize: "35px", marginBottom: "10px" }}
                    />
                    <p className="profileInfoPointer">23k</p>
                    Followers
                  </span>
                  <span className="profileInfoFollowItem">
                    <RiUserStarLine
                      style={{ fontSize: "35px", marginBottom: "10px" }}
                    />
                    <p className="profileInfoPointer">543</p>
                    Following
                  </span>
                </div>
                <hr className="hrStyle" />
                <span className="profileInfoDescription">{user.bio}</span>
              </div>
            </div>
          </div>
          <div className="profileRightMiddleContainer">
            <div className="profileRightMiddle">
              <h3 className="profileRightMiddleItem">
                <ImImages style={{ fontSize: "28px", marginRight: "10px" }} />
                Pictures
              </h3>
            </div>
            <div className="profileRightMiddle">
              {user._id === currentUser._id ? (
                <Link style={{ width: "100%" }} to="/editprofile">
                  <h3 className="profileRightMiddleItem">
                    <AiOutlineEdit
                      style={{ fontSize: "33px", marginRight: "10px" }}
                    />
                    Edit Profile
                  </h3>
                </Link>
              ) : (
                <h3 onClick={HandleSend} className="profileRightMiddleItem">
                  <HiOutlineMail
                    style={{ fontSize: "35px", marginRight: "10px" }}
                  />
                  Message
                </h3>
              )}
            </div>
          </div>
          <div className="profileRightBottom">
            <MiddleBar username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
