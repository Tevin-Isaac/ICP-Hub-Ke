import React from "react";
import PageTemplate from "components/templates/PageTemplate";
import PageSentence from "components/molecules/PageSentence";
import LineDivider from "components/atoms/LineDivider";
import Footer from "components/organisms/Footer";
import Image from "next/image";

const partnerNames = [
  "Africa's Talking",
  "Egerton University",
  "ETH Safari",
  "GDG",
  "GDSC",
  "Bitget",
  "KBLD",
  "Kisii University",
  "Egerton University",
  "Lux Tech Academy",
  "Machakos University",
  "Memoi",
  "Modcom",
  "NIBS",
  "Gold DAO",
  "RISA",
  "Safari Computer Club",
  "Swypt",
  "Space Ya Tech",
  "Technical University of Mombasa",
  "Ubuntu Tribe",
  "Kotani Pay",
  "Zetech University",
  "Onramp Money",
  "Crypto Hub KE",
  "Africa Tech Summit",
  "Binusu",
  "Women Techmakers",
  "Atlas Network",
  "Web3 Bridge",
  "She Code Africa",
  "Busha",
  "Bitcoin Events",
  "Bioniq",
];

const Partners = () => {
  return (
    <PageTemplate title="Partners - ICP Hub Kenya">
      <PageSentence title="" />
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {partnerNames.map((partnerName, index) => (
              <div
                key={index}
                className="flex justify-center flex-col items-center"
              >
                <div className="relative group">
                  <Image
                    src={`/images/partner-logos/partner-logo-${index + 1}.png`}
                    alt={`Logo of ${partnerName}`}
                    width={1000}
                    height={800}
                    objectFit="contain"
                    className="transition-transform duration-300 transform group-hover:scale-105"
                  />
                  <p className="text-center m-1 text-sm">{partnerName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <LineDivider />
    </PageTemplate>
  );
};

export default Partners;
