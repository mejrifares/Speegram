import "./rightbar.css";
import { ImFire } from "react-icons/im";
import { useEffect, useState } from "react";
import axios from "axios";
import People from "../people/People";

const Rightbar = ({ user }) => {
  const HomeRightbar = () => {
    const [fetchusers, setFetchusers] = useState([]);

    useEffect(() => {
      const AllUsers = async () => {
        try {
          const res = await axios.get("users/friends");
          setFetchusers(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      AllUsers();
    }, []);
    return (
      <>
        <div className="rightbarInfoContainer">
          <div className="rightbarInfoAds">
            <div className="rightbarInfoAdsHeader">
              <ImFire
                style={{ marginRight: "5px" }}
                className="rightbarInfoAdsIcon"
              />
              <span className="rightbarInfoAdsValue">Supported</span>
            </div>
            <div className="rightbarInfoAdsImgWrapper">
              <img
                className="rightbarInfoAdsImg"
                src="https://blog.stickymarketingtools.com/wp-content/uploads/2017/08/sample-photography-facebook-ads-you-can-use.jpg"
                alt="ads img"
              />
            </div>
            <div className="rightbarInfoAdsBottom">
              <span className="rightbarInfoAdsBottomItem">
                join us https://www.takisports.com
              </span>
            </div>
          </div>

          <div className="rightbarInfoBack">
          <h4
          style={{ color: "rgb(100, 100, 100)", fontSize: "20px" }}
          className="rightbarTitle"
        >
          People you may know
        </h4>
            {fetchusers.map((u) => (
              <People userFetch={u}/>
            ))}
          </div>
        </div>
      </>
    );
  };
  const ProfileRightbar = () => {
    return (
      <>
        <div className="rightbarInfoContainer">
          <div className="rightbarInfoBack">
            <h1 className="rightBarTitle bordering">Introductions</h1>
            <div className="rightbarInfo">
              <div className="rightbarInfoItem bordering">
                <span className="rightbarInfoKey">Country</span>
                <p className="rightbarInfoValue">{user.country}</p>
              </div>
              <div className="rightbarInfoItem bordering">
                <span className="rightbarInfoKey">City</span>
                <p className="rightbarInfoValue">{user.city}</p>
              </div>
              <div className="rightbarInfoItem bordering">
                <span className="rightbarInfoKey">Birthday</span>
                <p className="rightbarInfoValue">{user.birthday}</p>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Website</span>
                <p className="rightbarInfoValue">{user.website}</p>
              </div>
              {/* <div className="rightbarInfoItem bordreing">
                <span className="rightbarInfoKey">Country</span>
                <p className="rightbarInfoValue">Tunis</p>
              </div>
              <div className="rightbarInfoItem">
                <span className="rightbarInfoKey">Country</span>
                <p className="rightbarInfoValue">Tunis</p>
              </div> */}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarContainer">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
