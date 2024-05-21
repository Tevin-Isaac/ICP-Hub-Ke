import React from 'react'
import PageTemplate from 'components/templates/PageTemplate'
import PageSentence from 'components/molecules/PageSentence'
import LineDivider from 'components/atoms/LineDivider'

const Services = () => {
  return (
    <>
      <PageTemplate title='Education - ICP Hub Kenya'>

        <section className="grid place-items-center" data-aos="zoom-in-up">
          <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12">
            <PageSentence
              badge="EDUCATION"
              title="Free dacade course!"
              description='You can start building decentralized applications by enrolling to our dacade course, which is free. You also get rewarded once you have completed the course!'
              link={{ href: 'https://dacade.org/communities/icp', text: 'Check out the dacade course' }}
            />
          </div>
        </section>

        <LineDivider />

      </PageTemplate>
    </>
  )
}

export default Services
