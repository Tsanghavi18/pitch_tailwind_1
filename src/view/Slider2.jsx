import React, { useRef, useEffect, useState } from 'react';
import image1 from '../Image/image1.avif';
import image2 from '../Image/image2.avif';
import image3 from '../Image/image3.avif';
import image4 from '../Image/image4.avif';
import image5 from '../Image/image5.avif';
import image6 from '../Image/image6.avif';

const images = [image1, image2, image3, image4, image5, image6];

function LoopingSlider() {
  const containerRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(640);
  const gap = 40;
  const tripledImages = [...images, ...images, ...images];
  const imageCount = images.length;

  const scrollToIndex = (index, behavior = 'smooth') => {
    if (!containerRef.current) return;
    const offsetToCenter = (containerRef.current.clientWidth - slideWidth) / 2;
    const scrollLeft = index * (slideWidth + gap) - offsetToCenter + gap / 2;
    containerRef.current.scrollTo({ left: scrollLeft, behavior });
  };

  useEffect(() => {
    const updateWidth = () => {
      const container = containerRef.current;
      if (!container) return;
      const containerWidth = container.clientWidth;
      const newWidth = Math.min(640, containerWidth > 768 ? 640 : containerWidth - 48);
      setSlideWidth(newWidth);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Initialize scroll to the middle set of images on medium+ screens
  useEffect(() => {
    if (slideWidth > 0 && window.innerWidth >= 640) {
      scrollToIndex(imageCount, 'auto');
    }
  }, [slideWidth]);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const slideSize = slideWidth + gap;
    const totalSlides = tripledImages.length;
    const offsetToCenter = (container.clientWidth - slideWidth) / 2;
    const scrollCenter = scrollLeft + offsetToCenter - gap / 2;
    const currentIndex = Math.round(scrollCenter / slideSize);

    if (currentIndex < imageCount) {
      scrollToIndex(currentIndex + imageCount, 'auto');
    } else if (currentIndex >= imageCount * 2) {
      scrollToIndex(currentIndex - imageCount, 'auto');
    }
  };

  const handleNext = () => {
    const container = containerRef.current;
    if (!container) return;
    const slideSize = slideWidth + gap;
    container.scrollBy({ left: slideSize, behavior: 'smooth' });
  };

  const handlePrev = () => {
    const container = containerRef.current;
    if (!container) return;
    const slideSize = slideWidth + gap;
    container.scrollBy({ left: -slideSize, behavior: 'smooth' });
  };

  return (
    <div className="relative px-4 md:px-6 text-center">
      <div className="text-gray-800 text-4xl md:text-5xl lg:text-6xl font-bold py-12 md:py-24">
        <h1>Built with Pitch</h1>
      </div>
      <div className="text-gray-700 text-normal sm:text-lg md:text-xl text-center -mt-4 md:-mt-14 py-1 px-4 tracking-wider leading-relaxed">
        <p>
          Get inspired by outstanding decks that have helped teams close deals, secure funding, and drive decisions.
        </p>
      </div>
      <div className="text-violet-600 text-base sm:text-lg md:text-xl flex justify-center items-center mt-4 font-bold">
        <p className="flex items-center cursor-pointer hover:underline">
          Explore the presentation gallery
          <span className="ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 md:w-6 md:h-6  text-violet-600"
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

      <div className="relative mt-8">
        <button
          onClick={handlePrev}
          className="hidden sm:flex absolute left-2 lg:left-8 top-1/2 -translate-y-1/2 z-20 bg-white p-1 md:p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8 text-violet-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="hidden sm:flex absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-10 bg-white p-1 md:p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8 text-violet-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div
          className="overflow-x-auto scrollbar-hide py-8"
          ref={containerRef}
          onScroll={handleScroll}
          style={{
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <div className="flex gap-10 px-10 w-max">
            {tripledImages.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 rounded-xl overflow-hidden shadow-md snap-center"
                style={{
                  width: `${slideWidth}px`,
                  height: `${slideWidth * 0.625}px`
                }}
              >
                <img src={img} alt={`Slide ${index}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoopingSlider;
