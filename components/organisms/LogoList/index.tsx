import LineDivider from "components/atoms/LineDivider";
import Image from "next/image";
import React from "react";
import SectionSentence from 'components/molecules/SectionSentence'

const LogoList = () => {
  return (
    <>
      <SectionSentence
        badge="OUR PARTNERS"
      />
      <div className="overflow-hidden border-y border-borderLight">
        <div className="py-8 animate-marquee whitespace-nowrap">

          <div className="inline-flex space-x-16">
            {[...Array(34)].map((_, index) => (
              <div key={index} className="animate-marquee-item">
                <Image
                  src={`/images/partner-logos/partner-logo-${index + 1}.png`}
                  alt={`Partner Logo ${index + 1}`} 
                  width={150}
                  height={75}
                  // objectFit="contain"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default LogoList;