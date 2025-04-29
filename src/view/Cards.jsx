import React from 'react';
import pitch1 from '../Image/pitch1.avif';
import pitch2 from '../Image/pitch2.avif';
import pitch3 from '../Image/pitch3.avif';

function Cards() {
  return (
    <div className="container mx-auto py-40 md:py-0  w-full ">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center px-4">
        <p className="text-gray-600 text-[17px] sm:text-sm md:text-lg mb-4 tracking-wide">
          From small team to enterprise, Pitch has all the tools you need to build <br />
          better presentations together.
        </p>
        <button className="mt-2 px-20 py-3 rounded-md font-bold text-white bg-custom-gradient">
          Sign up
        </button>
      </div>

      {/* Title */}
      <div className="text-center md:mt-10">
        <h1 className="text-4xl md:text-6xl text-gray-800 font-bold py-8 tracking-tighter">New From Pitch</h1>
      </div>

      {/* Cards Section */}
      <div className="overflow-x-hidden no-scrollbar container mx-auto md:mt-10">
        <div className="flex flex-col sm:flex-row sm:justify-center sm:flex-wrap md:flex-row gap-6 px-4 sm:px-24 py-2 min-w-[320px] sm:min-w-0">
          {/* Card 1 */}
          <div className="min-w-[280px] sm:w-[30%] border border-gray-300 rounded-xl p-4 shadow-md bg-white flex-shrink-0">
            <img src={pitch1} alt="Pitch 1" className="w-full h-40 object-cover rounded-md mb-4" />
            <p className="text-violet-500 text-xs font-bold uppercase mb-1 py-2">Product update</p>
            <h1 className="text-2xl text-gray-800 font-semibold hover:text-violet-500">Pitching is changing.</h1>
            <h1 className="text-2xl text-gray-800 font-semibold hover:text-violet-500">And so is Pitch.</h1>
          </div>

          {/* Card 2 */}
          <div className="min-w-[280px] sm:w-[30%] border border-gray-300 rounded-xl p-4 shadow-md bg-white flex-shrink-0 hover:text-violet-500">
            <img src={pitch2} alt="Pitch 2" className="w-full h-40 object-cover rounded-md mb-4 hover:text-violet-500" />
            <p className="text-violet-500 text-xs font-bold uppercase mb-1 py-2">Release roundup</p>
            <h1 className="text-2xl text-gray-800 font-semibold hover:text-violet-500">A look back at pitch in</h1>
            <h1 className="text-2xl text-gray-800 font-semibold hover:text-violet-500">2024</h1>
          </div>

          {/* Card 3 */}
          <div className="min-w-[280px] sm:w-[30%] border border-gray-300 rounded-xl p-4 shadow-md bg-white flex-shrink-0">
            <img src={pitch3} alt="Pitch 3" className="w-full h-40 object-cover rounded-md mb-4 order-2 md:order-1" />
            <p className="text-violet-500 text-xs font-bold uppercase mb-1 py-2">Presentation resources</p>
            <h1 className="text-2xl text-gray-800 font-semibold hover:text-violet-500">Win deals with</h1>
            <h1 className="text-2xl text-gray-800 font-semibold hover:text-violet-500">interactive sales decks</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
