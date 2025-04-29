import React, { useEffect, useRef } from "react";

const ScrollSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    // Initialize sliders to ensure they are visible and aligned
    const slider1 = document.querySelector(".scroll-slider-1");
    const slider2 = document.querySelector(".scroll-slider-2");
    const slider3 = document.querySelector(".scroll-slider-3");

    if (slider1 && slider2 && slider3) {
      slider1.style.transform = `translateX(0)`;
      slider2.style.transform = `translateX(0)`;
      slider3.style.transform = `translateX(0)`;
      console.log("Sliders initialized:", { slider1, slider2, slider3 });
    } else {
      console.error("One or more sliders not found:", {
        slider1,
        slider2,
        slider3,
      });
    }

    let timeout;
    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const scrollTop = window.scrollY;
        console.log("ScrollTop:", scrollTop);
        if (slider1 && slider2 && slider3) {
          slider1.style.transform = `translateX(${scrollTop * 0.03}px)`; // Move left slowly
          slider2.style.transform = `translateX(-${scrollTop * 0.05}px)`; // Move left faster
          slider3.style.transform = `translateX(${scrollTop * 0.06}px)`; // Move left fastest
        }
      }, 10);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("ScrollSlider is visible, adding scroll listener");
          window.addEventListener("scroll", handleScroll);
        } else {
          console.log("ScrollSlider is not visible, removing scroll listener");
          window.removeEventListener("scroll", handleScroll);
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  const sliderImages1 = [
    "https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1717138344/website/homepage/templates/Digital_Agency_Pitch.png",
    "https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1717138343/website/homepage/templates/Creative_Brief.png",
    "https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1717138364/website/homepage/templates/Sales_Pitch.png",
    "https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1717138340/website/homepage/templates/Async_Sales_Deck.png",
    "https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1717138346/website/homepage/templates/Product_Launch.png",
    "https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1717138340/website/homepage/templates/Board_Deck.png",
    "https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1717138340/website/homepage/templates/Brand_Guidelines.png",
    "https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1717138346/website/homepage/templates/Product_Launch.png"
  ];

  const sliderImages2 = [
    "https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1717138364/website/homepage/templates/Quarterly_Business_Review.png",
    "https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1717138346/website/homepage/templates/Mutual_Action_Plan.png",
    "https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1717138347/website/homepage/templates/Product_Launch-1.png",
    "https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1717138340/website/homepage/templates/Business_Proposal.png",
    "https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1717138342/website/homepage/templates/Concept_Proposal.png",
    "https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1717138366/website/homepage/templates/Sales_Proposal.png",
    "https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1717138342/website/homepage/templates/Creative_Brief_HG.png",
    "https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1717138364/website/homepage/templates/Sales_Deck.png",
  ];

  const sliderImages3 = [
    "https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1717138341/website/homepage/templates/Brand_Style_Guide.png",
    "https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1717138365/website/homepage/templates/Series_B_Pitch_Deck.png",
    "https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1717138345/website/homepage/templates/Investor_Update.png",
    "https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1717138366/website/homepage/templates/Tone_of_Voice_Guidelines.png",
    "https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1717138344/website/homepage/templates/Go-to-Market_Strategy.png",
    "https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1717138344/website/homepage/templates/Design_Proposal.png",
    "https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1717138343/website/homepage/templates/Design_Pitch_Deck.png",
    "https://res.cloudinary.com/pitch-software/image/upload/f_auto/v1717138342/website/homepage/templates/Case_Study.png",
  ];

  const renderSlider = (images, extraClass) => (
    <div
      className={`flex  mx-auto whitespace-nowrap gap-2 transition-transform duration-200 ease-linear ${extraClass} justify-center items-center`}
      style={{ maxWidth: "100%" }}
    >
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          className="w-[150px] h-[90px] object-cover flex-shrink-0 sm:w-[180px] sm:h-[110px] md:w-[200px] md:h-[120px]"
          alt={`Slide ${i}`}
          onLoad={() => console.log(`Image loaded: ${src}`)}
          onError={() => console.error(`Image failed to load: ${src}`)}
        />
      ))}
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col justify-center items-center">
        <div
          ref={sliderRef}
          className="max-w-7xl mx-auto flex flex-col overflow-visible gap-5 min-h-screen"
        >
          <div className="scroll-slider-1 justify-start">
            {renderSlider(sliderImages1, "scroll-slider-1")}
          </div>
          <div className="scroll-slider-2 justify-start">
            {renderSlider(sliderImages2, "scroll-slider-2")}
          </div>
          <div className="scroll-slider-3 justify-start">
            {renderSlider(sliderImages3, "scroll-slider-3")}
          </div>  
        </div>
      </div>
    </div>
  );
};

export default ScrollSlider;
