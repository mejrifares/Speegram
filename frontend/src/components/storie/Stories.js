import "./stories.css";

const Stories = () => {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="storie">
      <div className="storieWrapper">
        <div className="storieItem">
          <img src={pf + "user1.jpeg"} className="storieImg" alt="storie img" />
        </div>
        <div className="storieUsername">
          <span className="storieName">Faress Mejri</span>
        </div>
      </div>
    </div>
  );
};

export default Stories;
