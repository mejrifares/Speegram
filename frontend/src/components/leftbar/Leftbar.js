import "./leftbar.css";
import { MdOndemandVideo } from "react-icons/md";
import { VscHome } from "react-icons/vsc";
import { MdExplore } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { MdWifiTethering } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";
import { BiBrightnessHalf } from "react-icons/bi";
import { GiBurningSkull } from "react-icons/gi";
import { GiBurningRoundShot } from "react-icons/gi";
import { BiChevronsDown } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Leftbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="leftbar">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <Link style={{color:"black", textDecoration:"none"}} to={`/profile/${user.username}`}>
            <li className="leftbarListItem">
              <AiOutlineUser className="leftbarIcon" />
              <span className="leftbarListItemText">Profile</span>
            </li>
          </Link>
          <Link style={{color:"black", textDecoration:"none" }} to="/">
          <li className="leftbarListItem">
            <VscHome className="leftbarIcon" />
            <span className="leftbarListItemText">Home</span>
          </li>
          </Link>
          <li className="leftbarListItem">
            <MdExplore className="leftbarIcon" />
            <span className="leftbarListItemText">Explore</span>
          </li>
          <hr/>
          <Link to="/people" style={{color:"black", textDecoration:"none"}}>
          <li className="leftbarListItem">
            <FiUsers className="leftbarIcon" />
            <span className="leftbarListItemText">People</span>
          </li>
          </Link>
          <li className="leftbarListItem">
            <MdWifiTethering className="leftbarIcon" />
            <span className="leftbarListItemText">Live Stream</span>
          </li>
          <li className="leftbarListItem">
            <MdOndemandVideo className="leftbarIcon" />
            <span className="leftbarListItemText">Videos</span>
          </li>
          <li className="leftbarListItem">
            <BiChevronsDown className="leftbarIcon" />
            <span className="leftbarListItemText">Show More</span>
          </li>
          {/* change mode speegram */}

          <hr />
          <li className="leftbarListItem">
            <GiBurningSkull className="leftbarIcon" />
            <span className="leftbarListItemText">Mode Dark</span>
          </li>
          <li className="leftbarListItem">
            <GiSelfLove className="leftbarIcon" />
            <span className="leftbarListItemText">Mode Love</span>
          </li>
          <li className="leftbarListItem">
            <GiBurningRoundShot className="leftbarIcon" />
            <span className="leftbarListItemText">Mode Sport</span>
          </li>
          <li className="leftbarListItem">
            <BiBrightnessHalf className="leftbarIcon" />
            <span className="leftbarListItemText">Mode Normal</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Leftbar;
