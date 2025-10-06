import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import video from "../../assets/video/homeBanner.mp4";
import RequirementForm from "../../Components/RequirementForm";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader";

const HomepageBanner = () => {
  const [videoReady, setVideoReady] = useState(false);
  const [loading, setLoading] = useState(true);

  // Function to handle when video is ready to play
  const handleReady = () => {
    setVideoReady(true);
    setLoading(false);
  };

  // Preload the video
  useEffect(() => {
    const videoElement = document.createElement("video");
    videoElement.src = video;
    videoElement.preload = "auto";

    videoElement.onloadeddata = () => {
      setVideoReady(true);
      setLoading(false);
    };

    videoElement.onerror = () => {
      // Handle video loading error
      console.error("Error loading video");
      setLoading(false);
    };

    // Set a timeout to handle cases where video loading takes too long
    const timeout = setTimeout(() => {
      if (!videoReady) {
        setLoading(false);
      }
    }, 10000);

    return () => {
      clearTimeout(timeout);
      videoElement.onloadeddata = null;
      videoElement.onerror = null;
    };
  }, [videoReady]);

  return (
    <>
      {loading && <Loader />}

      <div className="relative min-h-screen flex justify-center items-center pt-[8rem]">
        <video
          src={video}
          autoPlay
          muted
          playsInline
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        ></video>

        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-black/30 z-10" />

        <div className="relative z-20 text-center sm:text-left wrapper">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Elevating Your Business with Cutting-Edge Technology
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl">
            Welcome to Aether AI, where innovation meets expertise. From
            blockchain to AI, gaming to automation, we create custom digital
            solutions that empower businesses and drive success.
          </p>
          <Link
            to={"/contact-us"}
            className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            BOOK A FREE CONSULTATION
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomepageBanner;
