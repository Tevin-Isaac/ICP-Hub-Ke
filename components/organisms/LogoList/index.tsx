import React, { useState } from "react";
import Image from "next/image";
import SectionSentence from "components/molecules/SectionSentence";

const logoData = Array.from({ length: 34 }, (_, index) => ({
  src: `/images/partner-logos/partner-logo-${index + 1}.png`,
  alt: `Partner Logo ${index + 1}`
}));

const LogoList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === logoData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? logoData.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <SectionSentence badge="OUR PARTNERS" />
      <div className="relative w-full border-y border-borderLight py-8">
        <div className="flex items-center justify-between">
          <button
            className="p-2 bg-gray-200 rounded-full"
            onClick={handlePrevious}
          >
            {"<"}
          </button>
          <div className="flex space-x-4 overflow-hidden w-full justify-center">
            <div
              className="flex transition-transform duration-500 animate-slide"
              style={{ transform: `translateX(-${currentIndex * 150}px)` }}
            >
              {logoData.map((logo, index) => (
                <div
                  key={index}
                  className="shrink-0 transition-all duration-500 hover:scale-110 mx-2"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={180}
                    height={85}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>
          <button className="p-2 bg-gray-200 rounded-full" onClick={handleNext}>
            {">"}
          </button>
        </div>
      </div>
    </>
  );
};

export default LogoList;
