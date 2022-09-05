import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./VideoList.css";

import interview from "../../assets/videos/interview.mp4";
import mightyThor from "../../assets/videos/jane-foster.mp4";
import spiderMan from "../../assets/videos/spiderman.mp4";
import blackPanther from "../../assets/videos/blackPanther.mp4";
import hawkeye from "../../assets/videos/hawkeye.mp4";
import kateBishop from "../../assets/videos/kate-bishop.mp4";
import natashaRo from "../../assets/videos/natashaRo.mp4";
import captainAmerica from "../../assets/videos/captain-america.mp4";
import she_hulk from "../../assets/videos/she-hulk-vs-hulk.mp4";
import hulkSmash from "../../assets/videos/hulkSmash.mp4";
import ironMan from "../../assets/videos/ironMan.mp4";
import thorKing from "../../assets/videos/thorKing.mp4";

// images
import interviewHulk from "../../assets/interview.png";
import janeFoster from "../../assets/jane-foster.webp";
import spiderman from "../../assets/spiderman.webp";
import blackpanther from "../../assets/black-panther.webp";
import hawkeyeSmall from "../../assets/hawkeye-small.webp";
import kate from "../../assets/kate.webp";
import natasha from "../../assets/natasha.webp";
import ca from "../../assets/ca.webp";
import she_Hulk from "../../assets/she-hulk.png";
import hulk from "../../assets/hulk.webp";
import ironman from "../../assets/ironman.webp";
import thor from "../../assets/thor.webp";

const videoData = [
  {
    id: 1,
    video: she_hulk,
    text: "she_hulk",
    poster: she_Hulk,
  },
  {
    id: 2,
    video: interview,
    text: "interview",
    poster: interviewHulk,
  },
  {
    id: 3,
    video: mightyThor,
    text: "mightyThor",
    poster: janeFoster,
  },
  {
    id: 4,
    video: spiderMan,
    text: "spiderman",
    poster: spiderman,
  },
  {
    id: 5,
    video: blackPanther,
    text: "blackpanther",
    poster: blackpanther,
  },
  {
    id: 6,
    video: hawkeye,
    text: "hawkeye",
    poster: hawkeyeSmall,
  },
  {
    id: 7,
    video: kateBishop,
    text: "kate",
    poster: kate,
  },
  {
    id: 8,
    video: natashaRo,
    text: "natasha",
    poster: natasha,
  },
  {
    id: 9,
    video: captainAmerica,
    text: "captain America",
    poster: ca,
  },
  {
    id: 10,
    video: hulkSmash,
    text: "hulk",
    poster: hulk,
  },
  {
    id: 11,
    video: ironMan,
    text: "ironman",
    poster: ironman,
  },
  {
    id: 12,
    video: thorKing,
    text: "thor",
    poster: thor,
  },
];

const VideoList = ({ onVideo }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 6, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
  };
  return (
    <div className="carouselContainer">
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="videoThumb"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {videoData.map((videoItems, index) => (
          <div
            onClick={() => onVideo(videoItems.video)}
            className="thumbContainer"
            key={videoItems.id}
          >
            <img src={videoItems.poster} alt={videoItems.text} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default VideoList;
