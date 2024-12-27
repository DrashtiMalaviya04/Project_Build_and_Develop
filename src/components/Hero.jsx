import { FaStar, FaYoutube } from "react-icons/fa";
import HeroImg from "../assets/dora-hero.webp";
import BannerImg from "../assets/dora.webp";
import HeroBottom from "./HeroBottom";
import React from "react";
import { IoClose } from "react-icons/io5";

const Hero = () => {
  const [isPlay, setIsPlay] = React.useState(false);
  const handlePlay = () => {
    setIsPlay(!isPlay);
  };
  return (
    <>
      <div className="min-h-[700px] center relative flex-col  ">
        <div className=" container mt-12 sm:mt-0 pb-20 sm:pb-0 relative z-20">
          <div className=" grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0">
            {/* text context section*/}
            <div className=" space-y-3 md:space-y-7 flex flex-col justify-center text-center sm:text-left px-10 sm:px-0 ">
              <div data-aos="fade-up">
                <h1
                  data-aos=" fade-up"
                  className=" text-4xl md:text-6xl font-bold"
                >
                  Watch Now in
                </h1>
                <h1
                  data-aos=" fade-up"
                  className=" text-6xl font-bold text-primary"
                >
                  3D
                </h1>
              </div>
              <p
                data-aos=" fade-up"
                data-aos-delay="300"
                className=" text-sm text-gray-500 font-bold "
              >
                The frist Full story in the Doraemon series was Published in
                January 1970
              </p>
              <div
                className=" mx-auto sm:mx-0"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <button
                  onClick={handlePlay}
                  className="primary-btn flex justify-center items-center gap-3 "
                >
                  Play on
                  <span>
                    <FaYoutube className=" text-2xl" />
                  </span>
                </button>
              </div>
            </div>
            {/* Image context section*/}
            <div className=" relative" data-aos="zoom-in">
              <img
                src={HeroImg}
                alt=""
                className=" w-[180px] sm:w-[240px] lg:w-[340px] mx-auto relative z-30 "
              />
              <div className=" absolute bottom-0 left-0 bg-black z-0 w-[240px] h-[20px] blur-2xl mx-auto"></div>
            </div>
            {/* Review context section*/}
            <div
              data-aos="slide-left"
              className=" sm:pl-16 md:pl-24 flex just-center sm:justify-end"
            >
              <div className=" flex items-center justify-end">
                <div className=" space-y-4 ">
                  <img
                    src={BannerImg}
                    alt=""
                    className=" w-full h-[100px] object-cover rounded-xl shadow-md hover:scale-110 duration-200 cursor-pointer"
                  />
                  <p className=" text-sm flex items-center gap-2 ">
                    4.7
                    <span>
                      <FaStar className="text-primary" />
                    </span>
                  </p>
                  <p className=" text-sm text-gray-400 ">
                    Bandai Figurtszero Doramont
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Button Sectoin */}
        <HeroBottom />
      </div>
      {/* video Player */}
      {isPlay && (
        <div className="absolute z-[9999] top-0 left-0 w-full h-full bg-black/70 backdrop-blur-sm ">
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
            <div className=" bg-white m-3 p-5 rounded-lg shadow-md">
              <div className=" flex items-center justify-between pb-3 ">
                <h1>Subscribe our TCJ Youtube Channel</h1>
                <IoClose
                  className=" text-3xl cursor-pointer hover:scale-110 duration-200"
                  onClick={handlePlay}
                />
              </div>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/qEayrFxOp28?si=xLh2GQw7gK9Wy5iZ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
