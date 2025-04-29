import React, { useState, useRef, useEffect } from "react";
import left1 from "../Image/left.avif";
import right1 from "../Image/right.avif";
import left2 from "../Image/left2.avif";
import right2 from "../Image/right2.avif";
import left3 from "../Image/left3.avif";
import right3 from "../Image/right3.avif";
import left4 from "../Image/left4.avif";
import right4 from "../Image/right4.avif";
import image1 from "../Image/Aravind_Srinivas.jpg";
import image2 from "../Image/photo.avif";
import image3 from "../Image/photo (1).avif";
import image4 from "../Image/photo (2).avif";

const roleData = [
  {
    role: "i run a business",
    left: left1,
    right: right1,
    image: image1,
    quote:
      "I love Pitch and have used it for Perplexity's fund raises, board meetings, and internal company presentations. If you're still on Google Slides, migrate — you won't regret it!",
    name: "Aravind Srinivas",
    title: "CEO",
    checklist: [
      "Customizable speaker view",
      "Video recordings on slides",
      "Public link-sharing",
      "Analytics links",
      "Engagement insights",
    ],
  },
  {
    role: "i'm a designer",
    left: left2,
    right: right2,
    image: image2,
    quote:
      "I can create my style guide with custom fonts, and edit templates quickly and way more effectively than with PowerPoint or Keynote.",
    name: "Brando Vasquez",
    title: "Branding and Design Lead",
    checklist: [
      "Custom fonts",
      "Branded templates",
      "Animation & transition",
      "Brand asset library",
      "Unlimited media uploads",
    ],
  },
  {
    role: "i work in sales",
    left: left3,
    right: right3,
    image: image3,
    quote:
      "When we share a presentation via a link, we can see the stats on who opened it. It's a great way of collaborating with clients.",
    name: "Stephanie McSwiney",
    title: "VP Sales",
    checklist: [
      "Advanced links",
      "Engagement insights",
      "Customizable speaker view",
      "Brand logo search",
      "iOS & Android apps",
    ],
  },
  {
    role: "i'm a marketer",
    left: left4,
    right: right4,
    image: image4,
    quote:
      "Its great to have a tool that enables people who aren't designers to be designers. With minimal effort, our design team can help others do their jobs really well.",
    name: "Gabriel MacSweeney",
    title: " Head of Product Marketing",
    checklist: [
      "Branded templates",
      "Slide statuses & assignees",
      "Video embeds",
      "Video recordings on slides",
      "Presentation analytics",
    ],
  },
];

function Clock() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = roleData[selectedIndex];
  const sliderRef = useRef(null);

  // For animated ring
  const [ringScale, setRingScale] = useState(110);
  const [ringOpacity, setRingOpacity] = useState(0.5);

  // Animation for ring
  useEffect(() => {
    const scaleInterval = setInterval(() => {
      setRingScale((prev) => {
        return prev >= 130 ? 110 : prev + 2;
      });
    }, 100);

    const opacityInterval = setInterval(() => {
      setRingOpacity((prev) => {
        return prev <= 0.2 ? 0.5 : prev - 0.05;
      });
    }, 150);

    return () => {
      clearInterval(scaleInterval);
      clearInterval(opacityInterval);
    };
  }, []);

  // Center the selected role when it changes
  useEffect(() => {
    if (sliderRef.current) {
      const container = sliderRef.current;
      const selectedElement = container.children[selectedIndex];

      if (selectedElement) {
        // Calculate position to center the selected element
        const containerWidth = container.offsetWidth;
        const selectedWidth = selectedElement.offsetWidth;
        const selectedLeft = selectedElement.offsetLeft;

        // Scroll to center the selected element
        container.scrollTo({
          left: selectedLeft - containerWidth / 2 + selectedWidth / 2,
          behavior: "smooth",
        });
      }
    }
  }, [selectedIndex]);

  return (
    <div>
      <div className="container mx-auto bg-gradient-to-b from-violet-50 to-white relative">
        <div className="text-gray-800 text-3xl md:text-5xl lg:text-6xl font-bold py-12 md:py-24 text-center relative">
          <img
            src={selected.left}
            className="absolute top-0 left-0 w-1/6"
            alt="Decorative left"
          />
          <h1 className="text-center text-3xl md:text-5xl font-bold">
            A tool for the whole <br className="hidden:md-block" /> team
          </h1>
          <img
            src={selected.right}
            className="absolute top-0 right-0 w-1/6"
            alt="Decorative right"
          />
        </div>

        <div className="text-gray-700 font-normal sm:text-lg md:text-lg text-center -mt-4 md:-mt-14 py-4 px-4 tracking-wide">
          <p>
            Need to create a pixel-perfect layout, craft a compelling story, or
            <br className="hidden sm:block" />
            land your next big deal? Pitch is packed with features for anyone
            <br className="hidden sm:block" />
            working with presentations.
          </p>
        </div>

        {/* Role selector - centered on large screens, scrollable on small */}
        <div className="pb-8">
          <div className="hidden md:flex justify-center">
            <ul className="flex uppercase text-gray-500 font-semibold tracking-wider">
              {roleData.map((item, idx) => (
                <li
                  key={idx}
                  className={`px-6 py-8 cursor-pointer font-eina text-sm transition duration-300 ${
                    selectedIndex === idx ? "text-violet-600 underline " : ""
                  }`}
                  onClick={() => setSelectedIndex(idx)}
                >
                  {item.role}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile slider with no auto-centering */}
          <div
            ref={sliderRef}
            className="md:hidden overflow-x-auto no-scrollbar px-4 py-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <ul className="flex uppercase text-gray-500 font-semibold whitespace-nowrap tracking-wider">
              {roleData.map((item, idx) => (
                <li
                  key={idx}
                  className={`px-4 py-1 cursor-pointer rounded-md transition duration-300 ${
                    selectedIndex === idx ? "text-violet-600 underline" : ""
                  }`}
                  onClick={() => setSelectedIndex(idx)}
                >
                  {item.role}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto w-full bg-white px-4 py-6 md:py-16 flex justify-center">
        <div className="sm:block w-full max-w-5xl border border-violet-500 rounded-[62px] p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-stretch justify-center md:gap-12 lg:gap-40 w-full">
            {/* Checklist Items - First on small screens */}
            <div className="flex flex-col justify-center items-start px-4 sm:px-6 ml-18 w-[600px]">
            <ul className="mb-4 font-bold text-2xl space-y-6">
              {[
                "Customizable speaker view",
                "Video recordings on slides",
                "Public Link Sharing",
                "Analytics links",
                "Engagement insights",
              ].map((item, idx) => (
                <ul key={idx} className="flex gap-4 md:gap-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 md:w-6 md:h-6 text-gray-800 flex-shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-lg md:text-2xl font-bold text-gray-800">
                    {/* {text} */}
                  </span>
                </ul>
              ))}
            </ul>
            </div>

            {/* Image and Quote Section - Second on small screens */}
            <div className="-mb-52 py-10 sm:py-0 w-full  md:w-3/5 md:mb-0 md:relative md:-mt-20 z-10 order-2 md:order-1">
              <div className="bg-violet-600 rounded-2xl h-full pt-8 pb-8 px-4 md:px-6 shadow-lg">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="relative inline-block -mt-14">
                    {/* Single animated ring with dynamic scale and opacity */}
                    <div
                      className="absolute inset-0 rounded-full border-yellow-500 z-0"
                      style={{
                        transform: `scale(${ringScale}%)`,
                        opacity: ringOpacity,
                        transition:
                          "transform 0.5s ease-out, opacity 0.5s ease-out",
                        borderWidth: "16px",
                        borderStyle: "solid",
                      }}
                    ></div>

                    {/* Profile image with border */}
                    <img
                      src={selected.image}
                      alt={selected.name}
                      className="relative z-10 rounded-full w-40 h-40 border-8 border-yellow-400 object-cover"
                    />
                  </div>

                  <span className="text-white text-lg md:text-xl font-bold max-w-md py-10">
                    "{selected.quote}"
                  </span>
                  <p className="text-white text-lg md:text-xl font-bold">
                    {selected.name},{" "}
                    <span className="font-normal">{selected.title}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add a style to hide scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default Clock;
