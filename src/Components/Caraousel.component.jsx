import { useState, useEffect } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export default function Carousel() {
  // Initial active index for Image Carousel
  const [activeIndex, setActiveIndex] = useState(0);
  // Initial active state for loading Photos or Videos
  const [activeLink, setActiveLink] = useState("Photos");
  const videoUrl = "https://www.youtube.com/embed/2Y1yyl64FYc?autoplay=1";

  const ImageList = [
    "../../src/assets/property1a.jpg",
    "../../src/assets/property1b.jpg",
    "../../src/assets/property1c.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next image after 2 seconds
      if (activeLink !== "Video") {
        setActiveIndex((prevIndex) => (prevIndex + 1) % ImageList.length);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [activeLink, ImageList.length]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % ImageList.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + ImageList.length) % ImageList.length
    );
  };

  const handleClick = (text) => {
    console.log(text + " clicked");
    setActiveLink(text);
  };

  return (
    <div className="relative h-screen">
      <div className="h-5/6 relative">
        <h1 className="absolute top-10 left-10 text-4xl text-white z-10">
          Inaara by ALYF at Alibaug
        </h1>
        <div className="absolute top-10 right-10 z-10 flex space-x-4">
          <button className="text-white text-sm bg-green-800 px-4 py-2 rounded-md">
            Invest now
          </button>
          <button className="text-white text-sm bg-gray-500 px-4 py-2 rounded-md">
            Schedule and Emeet
          </button>
        </div>
        {activeLink === "Video" ? (
          <iframe
            className="h-full w-full object-cover rounded-md"
            src={videoUrl}
            title="Video"
            allowFullScreen
          ></iframe>
        ) : (
          <img
            src={ImageList[activeIndex]}
            className="h-full w-full object-cover rounded-md"
            alt="Carousel background"
          />
        )}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent rounded-b-lg"></div>

        <div className="flex absolute left-0 right-0 bottom-0 ml-24 mb-12 text-white z-10">
          <div onClick={() => handleClick("Photos")}>
            <h3
              style={
                activeLink === "Photos"
                  ? { textDecoration: "underline", marginRight: "10px" }
                  : {}
              }
              className="ml-2 pb-3 text-xl cursor-pointer"
            >
              Photos
            </h3>
          </div>
          <div onClick={() => handleClick("Video")}>
            <h3
              style={
                activeLink === "Video"
                  ? { textDecoration: "underline", marginRight: "10px" }
                  : {}
              }
              className="ml-8 pb-3  text-xl cursor-pointer"
            >
              Video
            </h3>
          </div>
        </div>
      </div>
      {activeLink !== "Video" && (
        <div className="absolute top-0 h-full w-full flex justify-between items-center text-white px-10 text-3xl pointer-events-none">
          <button onClick={handlePrev} className="pointer-events-auto">
            <BsFillArrowLeftCircleFill />
          </button>
          <button onClick={handleNext} className="pointer-events-auto">
            <BsFillArrowRightCircleFill />
          </button>
        </div>
      )}
    </div>
  );
}
