import React from 'react';
import background from '../Image/backgroundimage.avif';
import image from '../Image/onbackgroundimage.avif';

function Abovefooter() {
  return (
    <div className="relative w-full overflow-hidden -mt-8 md:mt-20">
        <img 
          src={background} 
          alt="Background" 
          className="h-[450px] sm:h-[490px] md:h-[530px] lg:h-[650px] w-full object-cover"
        />
      
      {/* Content overlay - adjusted top padding and reduced bottom space */}
      <div className="absolute inset-0 flex flex-col items-center justify-start pt-8 sm:pt-12 md:pt-16 lg:pt-10 px-4 sm:px-6 md:px-10 text-white text-center z-10">
        <div className="w-full max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
            Get started with Pitch
          </h2>
          
              <button className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 rounded-md font-semibold text-violet-900 bg-gradient-to-r from-[#ffd02c] to-[#ff9e2c] hover:opacity-90 transition duration-300">
                Sign up for free
              </button>

          {/* Added margin bottom to prevent overlap with image */}
          <div className="flex justify-center w-full mb-24 sm:mb-28 md:mb-32 lg:mb-16">
            <ul className="flex flex-col sm:flex-row items-center justify-center flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-white font-bold py-4 sm:py-6 md:py-8">
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                  className="w-5 h-5 text-white flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <span>Unlimited presentations</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                  className="w-5 h-5 text-white flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <span>Unlimited sharing links</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                  className="w-5 h-5 text-white flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <span>Custom templates</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Overlay image at bottom - adjusted positioning */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <img 
          src={image} 
          alt="Feature preview" 
          className="w-[85%] sm:w-4/5 md:w-2/3 lg:w-2/3 max-w-4xl mx-auto"
        />
      </div>
    </div>
  );
}

export default Abovefooter;