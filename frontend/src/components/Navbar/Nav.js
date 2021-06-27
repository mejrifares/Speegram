import React, { useContext } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { VscHome } from "react-icons/vsc";
import { AiOutlineUser } from "react-icons/ai";
import { MdExpandMore } from "react-icons/md";
import {BsChatSquare} from "react-icons/bs";
import {BsList} from "react-icons/bs"
import { AuthContext } from "../../context/AuthContext";

const Nav = () => {

  const {user} = useContext(AuthContext)

  // const logOut = () => {
  //   localStorage.clear()
    
  //   window.location.reload()
  // }

  const pf = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <nav>
        <div className="navContainer">
          <div className="navLeft">
          <div className="navList">
            <BsList className="navListIcon"/>
          </div>
          <div className="navLogo">
            <Link to="/">
            <img
              className="navLogoImg"
              src={`${pf}speegrampng.png`}
              alt=""
            />
            </Link>
          </div>
          </div>
          <div className="navWrapper">
            <ul className="navEllemment">
              <li className="navEllemmentItem">
                <Link to="/">
                  <div className="navEllemmentItemIcon">
                    <VscHome
                      style={{ fontSize: "26px", color: "rgb(116, 115, 115)" }}
                    />
                  </div>
                </Link>
              </li>
              <li className="navEllemmentItem">
                <Link to={`/profile/${user.username}`}>
                  <div className="navEllemmentItemIcon">
                    <AiOutlineUser
                      style={{ fontSize: "26px", color: "rgb(116, 115, 115)" }}
                    />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="navInputFlex">
            <FiSearch className="navInputIcon" />
            <input className="navInput" placeholder="Search Speegram.." />
          </div>
          <div className="navWrapper">
            <ul className="navEllemment">
              <li className="navEllemmentItem">
                <Link to="/notification">
                <div className="navEllemmentItemIcon">
                  <IoMdHeartEmpty
                    style={{ fontSize: "27px", color: "rgb(116, 115, 115)" }}
                  />
                </div>
                </Link>
              </li>
              <li className="navEllemmentItem">
                <Link to="/messanger">
                  <div className="navEllemmentItemIcon">
                    <BsChatSquare
                      style={{ fontSize: "22px", color: "rgb(116, 115, 115)", marginTop:"2px" }}
                    />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="navOption">
            <div className="navOptionIcon">
              <MdExpandMore style={{ fontSize: "30px" }} />
              {/* <button onClick={logOut}>log out</button> */}
            </div>
            {/* <div className="navDropdown">
              <ul className="navDropdownList">
                <li className="navDropdownListItem">
                 <IoSettingsOutline/>
                 <span>Settings</span>
                </li>
                <li className="navDropdownListItem">
                 <IoSettingsOutline/>
                 <span>Settings</span>
                </li>
                <li className="navDropdownListItem">
                 <IoSettingsOutline/>
                 <span>Settings</span>
                </li>
                <hr/>
                <li className="navDropdownListItem">
                 <IoSettingsOutline/>
                 <span>Log Out</span>
                </li>
              </ul>

            </div> */}
          </div>

        </div>
      </nav>
    </>
  );
};

export default Nav;
