import React from 'react';
import videoSource1 from '../Image/slide1video.mp4';

function Slider() {
  return (
    <div className="overflow-x-hidden -mt-24 md:pt-0 px-4 md:px-8 lg:px-12 xl:px-16 max-w-screen-2xl mx-auto">
      {/* First Section */}
      <div className="flex flex-col items-center gap-6 py-32 md:flex-row md:items-center md:gap-8">
        
        {/* Video - Order 1 on mobile, Order 1 on desktop */}
        <div className="w-full md:w-1/2 flex justify-center items-center order-1">
          <div className="relative z-10">
            <video
              className="w-[550px] h-auto rounded-lg shadow-md"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={videoSource1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Text Content - Order 2 on mobile, Order 2 on desktop */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 items-start text-left py-6 md:py-10 order-2">
          <h3 className="text-violet-600 font-bold text-xl md:text-xl">
            1-Start
          </h3>

          <p className="text-gray-800 text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-wide">
            Generate, discover, or<br className="hidden md:block" /> build a template
          </p>

          {/* Checklist Items */}
          {[
            "Start with AI or expert-made templates.",
            "Create custom templates for your team.",
            "Upload your own fonts and brand assets."
          ].map((text, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                className="w-5 h-5 text-black flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              <span className="text-[16px] text-gray-600 tracking-wide leading-normal md:text-base">{text}</span>
            </div>
          ))}

        <button className="bg-white text-violet-600 border border-violet-600 px-6 py-3 rounded-lg text-base font-bold hover:bg-gray-100 transition w-auto">
          Start exploring now
        </button>

        </div>
      </div>

      {/* Second Section - Reversed on desktop */}
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-8 mt-2 md:mt-8">
        
        {/* Text Content - Order 2 on mobile, Order 1 on desktop */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 items-start text-left py-6 md:py-10 order-2 md:order-1 md:px-20">
          <h3 className="text-violet-600 font-bold text-xl md:text-xl">
            2-Edit
          </h3>

          <p className="text-gray-800 text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-wide">
            Create sleek slides faster than ever
          </p>

          {/* Checklist Items */}
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
              className="w-5 h-5 text-black flex-shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <span className="text-[16px] text-gray-600 tracking-wide leading-normal md:text-base">Quickly add text, images, and interactive content.</span>
          </div>

          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
              className="w-5 h-5 text-black flex-shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <span className="text-[16px] text-gray-600 tracking-wide leading-normal md:text-base">Build elegant animations in seconds.</span>
          </div>

          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
              className="w-5 h-5 text-black flex-shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <span className="text-[16px] text-gray-600 tracking-wide leading-normal md:text-base">Collaborate with others in real time.</span>
          </div>

          <button className="bg-white text-violet-600 border border-violet-600 px-6 py-3 rounded-lg text-base font-bold hover:bg-gray-100 transition w-auto">
            Start creating now
          </button>
        </div>

        {/* Video - Order 1 on mobile, Order 2 on desktop */}
        <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2">
          <div className="relative z-10">
            <video
              className="w-[550px] h-auto rounded-lg shadow-md"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="https://d3x4b1wy4qlu9.cloudfront.net/media/homepage-png/edit.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      {/* First Section */}
      <div className="flex flex-col items-center gap-6 py-12 md:flex-row md:items-center md:gap-8">
        
        {/* Video - Order 1 on mobile, Order 1 on desktop */}
        <div className="w-full md:w-1/2 flex justify-center items-center order-1">
          <div className="relative z-10">
            <video
              className="w-[550px] h-auto rounded-lg shadow-md"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="https://d3x4b1wy4qlu9.cloudfront.net/media/homepage-png/share-2024.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Text Content - Order 2 on mobile, Order 2 on desktop */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 items-start text-left py-6 md:py-10 order-2">
          <h3 className="text-violet-600 font-bold text-xl md:text-xl">
          3 — Share
          </h3>

          <p className="text-gray-800 text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-wide">
          Convince anyone, <br className='hidden md:block'/>
          from anywhere
          </p>

          {/* Checklist Items */}
          {[
            "Start with AI or expert-made templates.",
            "Create custom templates for your team.",
            "Upload your own fonts and brand assets."
          ].map((text, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                className="w-5 h-5 text-black flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5" />
              </svg>
              <span className="text-[16px] text-gray-600 tracking-wide leading-normal md:text-base">{text}</span>
            </div>
          ))}

        <button className="bg-white text-violet-600 border border-violet-600 px-6 py-3 rounded-lg text-base font-bold hover:bg-gray-100 transition w-auto">
          Start exploring now
        </button>

        </div>
      </div>

      {/* Second Section - Reversed on desktop */}
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-8 mt-12 md:mt-24">
        
        {/* Text Content - Order 2 on mobile, Order 1 on desktop */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 items-start text-left py-6 md:py-6 order-2 md:order-1 md:px-20">
          <h3 className="text-violet-600 font-bold text-xl md:text-xl">
          4 — Measure
          </h3>

          <p className="text-gray-800 text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-wide">
          Know what’s working <br className='hidden:md-block'/> and who’s engaged
          </p>

          {/* Checklist Items */}
          <ul className="space-y-2 mb-4">
            {[
              "Manage your team’s outreach in one place.",
              "See when someone opens a deck or room.",
              "Track which slides your visitors view.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-500">
                <svg
                  className="w-5 h-5  mt-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button className="bg-white text-violet-600 border border-violet-600 px-6 py-3 rounded-lg text-base font-bold hover:bg-gray-100 transition w-auto">
            Start creating now
          </button>
        </div>

        {/* Video - Order 1 on mobile, Order 2 on desktop */}
        <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2">
          <div className="relative z-10">
            <video
              className="w-[550px] h-auto rounded-lg shadow-md"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="https://d3x4b1wy4qlu9.cloudfront.net/media/homepage-png/analytics.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;