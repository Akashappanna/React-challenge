import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
//css
import "./VideoList.css";

// videos
import she_hulk from "../../assets/videos/she-hulk-vs-hulk.mp4";
import VideoList from "./VideoList";

const VideoPage = () => {
  const [url, setUrl] = useState(she_hulk);
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("isLogged");
    navigate("/");
  };

  const videoDataHandler = (videoData) => {
    setUrl(videoData);
    console.log(videoData);
  };

  return (
    <div className="videoPage">
      <div className="player">
        <ReactPlayer
          url={url}
          width="initial"
          height="100vh"
          controls
          className="react-player"
        />
        <VideoList onVideo={videoDataHandler} />
      </div>

      <div className="date">
        <Link to="/date">
          <button type="button" className="">
            Click here to visit Date page
          </button>
        </Link>
      </div>

      <button type="button" onClick={logoutHandler} className="logout">
        logout
      </button>
    </div>
  );
};

export default VideoPage;
