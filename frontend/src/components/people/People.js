import axios from "axios";
import { useEffect, useState } from "react";

import Leftbar from "../leftbar/Leftbar";
import { Link } from "react-router-dom";
import Nav from "../Navbar/Nav";
import "./people.css";

const People = ({ userFetch }) => {
  const PeoplePage = () => {
    const [fetchusers, setFetchusers] = useState([]);

    const pf = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
      const AllUsers = async () => {
        try {
          const res = await axios.get("users/friends");
          console.log(res);
          setFetchusers(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      AllUsers();
    }, []);

    return (
      <>
        <Nav />
        <div className="people">
          <Leftbar />

          <div className="rightbarInfoBack">
            {fetchusers.map((user) => (
              <div className="rightbarPage">
                <ul className="rightbarFriendList">
                  <Link
                    to={`/profile/${user.username}`}
                    style={{ color: "black" }}
                  >
                    <li className="rightbarFriend">
                      <div className="rightbarProfileImgContainer">
                        <img
                          className="rightbarProfileImg"
                          src={
                            user.profilePicture
                              ? pf + user.profilePicture
                              : pf + "userprofile.png"
                          }
                          alt="profileImg"
                        />
                        <span className="rightbarUsername">
                          {user.username}
                        </span>
                      </div>
                      <button className="btnfollow">Follow</button>
                    </li>
                  </Link>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  const PeopleRight = () => {
    const pf = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
      <>
        <div>
          <ul className="rightbarFriendList">
            <Link
              to={`/profile/${userFetch.username}`}
              style={{ color: "black" }}
            >
              <li className="rightbarFriend">
                <div className="rightbarProfileImgContainer">
                  <img
                    className="rightbarProfileImg"
                    src={
                      userFetch.profilePicture
                        ? pf + userFetch.profilePicture
                        : pf + "userprofile.png"
                    }
                    alt="profileImg"
                  />
                  <span className="rightbarUsername">{userFetch.username}</span>
                </div>
                <button className="btnfollow">Follow</button>
              </li>
            </Link>
          </ul>
        </div>
      </>
    );
  };

  return (
    <div>
      {userFetch ? <PeopleRight /> : <PeoplePage userFetch={userFetch} />}
    </div>
  );
};

export default People;
