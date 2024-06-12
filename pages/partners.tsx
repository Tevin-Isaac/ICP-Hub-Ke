import React from 'react'
import PageTemplate from 'components/templates/PageTemplate'
import PageSentence from 'components/molecules/PageSentence'
import LineDivider from 'components/atoms/LineDivider'
import Footer from 'components/organisms/Footer'
import Image from 'next/image'

const partnerNames = [
  "Africa's Talking",
  "Egerton University",
  "ETH Safari",
  "GDG",
  "GDSC",
  "_",
  "KBLD",
  "Kisii University",
  "Machakos university",
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
  "_",
  "Bitcoin Events",
  "Bioniq",
]

const Partners = () => {
  return (
    <>
      <PageTemplate title="Partners - ICP Hub Kenya">
        <PageSentence
          title="Our strategic partners"
        />
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 mb-8 mt-28">
          {partnerNames.map((partnerName, index) => (
            <div key={index} className="flex justify-center flex-col">
              <Image
                src={`/images/partner-logos/partner-logo-${index + 1}.png`}
                alt={`Partner Logo ${index + 1}`}
                width={700}
                height={450}
              />
              <p className='text-center m-2'>{partnerName}</p>
            </div>
          ))}
        </div>
        <Footer />
        <LineDivider />
      </PageTemplate>
    </>
  )
}

export default Partners