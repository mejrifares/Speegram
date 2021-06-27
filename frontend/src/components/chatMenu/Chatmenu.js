import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Chatmenu.css";

const Chatmenu = ({ conversation}) => {
  const [user, setUser] = useState(null);

  const pf = process.env.REACT_APP_PUBLIC_FOLDER;

  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    const friendId = conversation.members.find((e) => e !== currentUser._id);
    const getUser = async () => {
      try {
        const res = await axios(`/users?userId=${friendId}`);
        setUser(res.data);

      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="chatmenu">
      <img
        src={user?.profilePicture ? user.profilePicture : pf + "userprofile.png"}
        className="chatmenuImg"
        alt="user profile"
      />
      <span className="chatmenuName">{user?.username}</span>
    </div>
  );
};

export default Chatmenu;
