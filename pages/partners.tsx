import React from 'react'
import PageTemplate from 'components/templates/PageTemplate'
import PageSentence from 'components/molecules/PageSentence'
import LineDivider from 'components/atoms/LineDivider'
import Footer from 'components/organisms/Footer'
import Image from 'next/image'

const Partners = () => {
  return (
    <>
      <PageTemplate title="Partners - ICP Hub Kenya">
        <PageSentence
          title="Our strategic partners"
        />
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 mb-8 mt-28">
          {/* Replace the 'partner-logo.png' with the actual file names of your partner logos */}
          {[...Array(23)].map((_, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={`/images/partner-logos/partner-logo-${index + 1}.png`}
                alt={`Partner Logo ${index + 1}`}
                width={400}
                height={250}
              />
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
