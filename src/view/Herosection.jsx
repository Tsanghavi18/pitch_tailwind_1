import React, { useRef, useEffect, useState } from "react";
import videoSource from "../Image/video.mp4";
import object1 from "../Image/objcet_1.png";
import object2 from "../Image/object_2.png";
import object3 from "../Image/object_3.png";
import object4 from "../Image/object_4.png";
import object5 from "../Image/object_5.png";

function Herosection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Action items data
  const actionItems = [
    {
      icon: (
        <svg
          className="w-6 h-6 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m10.051 8.102-3.778.322-1.994 1.994a.94.94 0 0 0 .533 1.6l2.698.316m8.39 1.617-.322 3.78-1.994 1.994a.94.94 0 0 1-1.595-.533l-.4-2.652m8.166-11.174a1.366 1.366 0 0 0-1.12-1.12c-1.616-.279-4.906-.623-6.38.853-1.671 1.672-5.211 8.015-6.31 10.023a.932.932 0 0 0 .162 1.111l.828.835.833.832a.932.932 0 0 0 1.111.163c2.008-1.102 8.35-4.642 10.021-6.312 1.475-1.478 1.133-4.77.855-6.385Zm-2.961 3.722a1.88 1.88 0 1 1-3.76 0 1.88 1.88 0 0 1 3.76 0Z"
          />
        </svg>
      ),
      label: "PITCH",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
          />
        </svg>
      ),
      label: "DESIGN",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      ),
      label: "COLLABORATE",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
          />
        </svg>
      ),
      label: "ANALYZE",
    },
  ];

  // Auto-slide functionality for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth < 640) {
        setCurrentSlide((prev) => (prev + 1) % actionItems.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [actionItems.length]);

  return (
    <div className="relative overflow-hidden ">
      {/* SECTION 1: Gradient Background Top with Content */}
      <div
        className="bg-custom-gradient  pb-32 md:pb-96 "
        style={{
          borderBottomLeftRadius: "50% 30%",
          borderBottomRightRadius: "50% 30%",
          overflow: "hidden",
          boxShadow:
            "0 20px 40px 20px rgba(138, 43, 226, 0.7), 0 60px 120px 60px rgba(138, 43, 226, 0.3), 0 120px 240px 120px rgba(138, 43, 226, 0.1)",
        }}
      >
        <div className="relative z-10 pb-16">
          {/* Headings */}
          <div className="py-12 md:py-20 text-white font-bold text-4xl sm:text-5xl md:text-7xl text-center px-4">
            <h1>Win more deals.</h1>
            <h1>Pitch.</h1>
          </div> 
          {/* Subtext */}
          <div className="text-white text-lg sm:text-lg md:text-2xl text-center -mt-8 md:-mt-14 py-1 px-4 leading-loose">
            <p>
              Pitch turns presentations into your team's superpower. Close
              deals, win <br className="hidden sm:block" />
              clients, and expand accounts — all while staying on brand.
            </p>
          </div>

          <img
            src={object2}
            className="hidden md:block absolute top-58 left-[10rem] w-[18rem] h-[18rem] object-cover opacity-40 z-0 pointer-events-none animate-bounce-y"
          />
          <img
            src={object1}
            className="hidden md:block absolute top-58 left-[-10rem] w-[32rem] h-[32rem] object-cover opacity-50 z-0 pointer-events-none animate-bounce-y"
          />
          <img
            src={object3}
            className="hidden md:block absolute top-32 right-[12rem] w-[12rem] h-[12rem] object-cover opacity-90 z-0 pointer-events-none  animate-bounce-y"
          />
          <img
            src={object4}
            className="hidden md:block absolute top-24 right-[8rem] w-[12rem] h-[12rem] object-cover opacity-50 z-0 pointer-events-none animate-bounce-y"
          />

          <img
            src={object5}
            className="hidden md:block absolute top-[-8rem] right-[-8rem] w-[24rem] h-[24rem] object-cover opacity-50 z-0 pointer-events-none animate-bounce-y"
          />

          {/* Buttons */}
          <div className="flex justify-center items-center gap-4 w-full text-center mt-6 px-4 sm:px-0 py-10">
            <button className="bg-white text-violet-700 px-3 py-2 rounded-lg text-lg font-semibold sm:text-md  hover:bg-gray-100 transition w-full sm:w-auto tracking-wide">
              Sign up for free
            </button>
            <button className="border border-white text-white px-3 py-2 rounded-lg text-lg font-semibold sm:text-md f transition w-full sm:w-auto tracking-wide">
              Get a demo
            </button>
          </div>

          {/* Mobile Slider for Action Items */}
          <div className="sm:hidden flex justify-center items-center w-full text-center mt-6 overflow-hidden">
            <div className="flex items-center justify-center w-full">
              <div className="flex items-center space-x-2">
                {actionItems[currentSlide].icon}
                <span className="text-white font-semibold">
                  {actionItems[currentSlide].label}
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Action Items */}
          <div className="hidden sm:flex justify-center items-center gap-4 md:gap-8 w-full text-center mt-6 flex-row mx-auto">
            {actionItems.map((item, index) => (
              <a key={index} className="flex items-center space-x-2">
                {item.icon}
                <span className="text-white font-semibold">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 2: Normal Background with Video */}
      <div className=" bg-transparent z-0 -mt-52 md:-mt-96">
        <div className="max-w-7xl mx-auto">
          {" "}
          {/* Add max width container */}
          <video
            className="w-full h-auto px-4 sm:px-12 md:px-24 lg:px-32 py-10"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div className="py-32 bg-violet-50 text-center">
        <p className="text-xl font-bold text-gray-800 -my-24 md:text-gray-800 md:text-4xl md:font-bold">
          Trusted by 3M+ teams worldwide
        </p>
        <div className="overflow-hidden py-32 bg-violet-50">
          <div className="relative overflow-hidden">
            {/* Left fade (optional) */}
            <div className="absolute left-0 top-0 bottom-0 w-32 md:w-96 bg-gradient-to-r from-violet-100 to-transparent z-10"></div>
            {/* Right fade (optional) */}
            <div className="absolute right-0 top-0 bottom-0 w-32 md:w-96 bg-gradient-to-l from-violet-100 to-transparent z-10"></div>
            <div className="whitespace-nowrap animate-slide flex items-center gap-8 pl-32 pr-32">
              {/* Initial empty space (right padding) */}
              <div className="w-32 h-full"></div>

              {/* Logo set */}
              <img
                src="/Image/unsplash_pqnf1p (1).svg"
                className="px-3 w-36 h-auto"
              />
              <img src="/Image/dept_vlvpvs.svg" className="px-3 w-36 h-auto" />
              <img src="/Image/eqt_scl5eh.svg" className="px-3 w-36 h-auto" />
              <img src="/Image/feedly.svg" className="px-3 w-36 h-auto" />
              <img src="/Image/index_ventures.svg" className="px-3 w-36 h-auto"/>
              <img src="/Image/koto.svg" className="px-3 w-36 h-auto" />
              <img src="/Image/linear.svg" className="px-3 w-36 h-auto" />
              <img src="/Image/mad.svg" className="px-3 w-36 h-auto" />
              <img src="/Image/primer.svg" className="px-3 w-36 h-auto" />
              <img src="/Image/synthesia.svg" className="px-3 w-36 h-auto" />
              <img src="/Image/thrive.svg" className="px-3 w-36 h-auto" />
              <img src="/Image/unsplash_pqnf1p (1).svg" className="px-3 w-36 h-auto"/>
              <img src="/Image/dept_vlvpvs.svg" className="px-3 w-36 h-auto" />
              <img src="/Image/eqt_scl5eh.svg" className="px-3 w-36 h-auto" />
              <img src="/Image/feedly.svg" className="px-3 w-36 h-auto" />
              <img src="/Image/index_ventures.svg" className="px-3 w-36 h-auto"/>
              <img src="/Image/koto.svg" className="px-3 w-36 h-auto" />
              <img src="/Image/linear.svg" className="px-3 w-36 h-auto" />
              <img src="/Image/mad.svg" className="px-3 w-36 h-auto" />
              <img src="/Image/primer.svg" className="px-3 w-36 h-auto" />
              <img src="/Image/synthesia.svg" className="px-3 w-36 h-auto" />
              <img src="/Image/thrive.svg" className="px-3 w-36 h-auto" />
              {/* Final empty space (left padding) */}
              <div className="w-52 h-full"></div>
            </div>
          </div>
          <div>
            <div className="text-transparent bg-clip-text bg-[linear-gradient(45deg,#2b2a35,#8a4cf9_120%)] text-4xl sm:text-6xl font-bold py-12 sm:py-24">
              <h1 className="hidden md:block ">Get a head start with</h1>
              <h1 className="hidden md:block">free templates</h1>
              <div className="block text-4xl sm:text-4xl sm:block md:hidden">
                <h1>
                  Get a head start <br className="block sm:hidden" />
                  with free
                  <br className="block md:hidden" />
                  templates
                </h1>
              </div>
            </div>

            <div className="text-gray-600  sm:text-lg md:text-xl text-center -mt-6 sm:-mt-8 md:-mt-14 py-0 sm:py-1 px-4 tracking-wider">
              <p>
                Choose from 100+ fully customizable templates crafted by subject
                matter
                <br className="hidden sm:block" />
                experts and presentation design pros. Or upload your existing
                PPTX file.
              </p>
            </div>

            <div className="text-violet-600 font-bold sm:text-lg md:text-xl flex justify-center items-center mt-4 sm:mt-6">
              <p className="flex items-center">
                Explore the templates gallery
                <span className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-violet-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
