import React from 'react'

function Howpitchworks() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 -mt-32 py-2 bg-transparent flex justify-center items-center relative z-10">
      {/* Center white rounded div with transparent sides */}
      <div className="bg-white rounded-md  w-full max-w-6xl px-6 sm:px-12 py-2 text-center">

        <div className="relative inline-block w-full max-w-2xl mx-auto text-gray-800 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold py-4 px-6 sm:py-4 sm:px-12 border-2 border-dashed" style={{ borderColor: '#FFA000' }}>
          <h1>How Pitch Works</h1>

          {/* Top-left label */}
          <p className="absolute -top-8 left-0 font-normal text-xs sm:text-sm bg-orange-400 text-gray-800 px-2 py-1 rounded flex items-center gap-1">
            Jack
            <span className="flex items-center gap-1">
              <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M6 12h.01m6 0h.01m5.99 0h.01" />
              </svg>
            </span>
          </p>

          {/* Arrows & Labels */}
          <div className="absolute hidden sm:block -bottom-14 left-4 sm:-left-6 px-2 py-1 animate-slide">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="rotate-180 text-blue-400" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767z" stroke="white" />
            </svg>
          </div>

          <p className="absolute hidden sm:flex -bottom-24 -left-0 sm:-left-20 text-xs sm:text-sm bg-blue-400 text-gray-800 px-6 py-3 rounded-full items-center gap-1">
            Joy
          </p>

          <div className="absolute hidden sm:block -bottom-0 right-2 sm:-right-6 px-2 py-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="rotate-180 text-orange-400" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767z" stroke="white" />
            </svg>
          </div>

          <p className="absolute hidden sm:flex -bottom-14 right-2 sm:-right-10 text-xs sm:text-sm bg-orange-400 text-gray-800 px-6 py-3 rounded-3xl items-center gap-1">
            Jack
          </p>

          <div className="absolute hidden sm:block -bottom-28 right-4 sm:right-0 px-2 py-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="rotate-180 text-yellow-400" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767z" stroke="white" />
            </svg>
          </div>

          <p className="absolute hidden sm:flex -bottom-40 right-0 sm:-right-24 text-xs sm:text-sm bg-yellow-400 text-gray-800 px-6 py-3 rounded-full items-center gap-1">
            Charlotte
          </p>
        </div>

        {/* Description */}
        <div className="text-gray-800 text-[16px] sm:text-base md:text-lg mt-10 px-2 sm:px-4 md:px-12 tracking-wide">
          <p>
            Pitch is the complete pitching platform that takes your design and delivery<br className="hidden sm:block"/>
            to the next level. Keep everyone on brand with templates, collaborate on<br className="hidden sm:block"/>
            slides, and share decks or entire deal rooms.
          </p>
        </div>

        {/* Button */}
        <button className="mt-6 sm:mt-8 px-6 py-3 rounded-md font-bold text-white bg-violet-500 text-sm sm:text-base">
          Create a presentation
        </button>

      </div>
    </div>
  )
}

export default Howpitchworks
