import ButtonLink from 'components/atoms/Button/ButtonLink'
import LineDivider from 'components/atoms/LineDivider'
import SectionSentence from 'components/molecules/SectionSentence'
import React from 'react'

const CallOut = () => {
  return (
    <>
      {/* <LineDivider /> */}
      <section className="grid grid-cols-1 gap-8 place-items-center m-4 p-10 py-12 lg:grid-cols-2 bg-[#F0BC39]">
        <div className="text-center sm:w-8/12 md:w-10/12 lg:w-full lg:text-left">
          <SectionSentence lightTitle="ICP Hub Kenya is dedicated to propelling the advancement of Blockchain Technology within our region and beyond." />
        </div>
        {/* <div className="flex flex-col justify-center gap-5 w-full sm:w-fit sm:flex-row lg:w-full lg:justify-end">
          <ButtonLink value="Join Us" color='#5E2222' href="https://t.me/icphub_KE" />
          <ButtonLink value="Contact Us" color="white" style="light" href="/contact" />
        </div> */}
        <div className="flex flex-col mx-auto sm:flex-row">
          <div className='m-1'>
            <ButtonLink value="Join Us" color='#5E2222' href="https://t.me/icphub_KE" />
          </div>
          <div className='m-1'>
            <ButtonLink value="Contact" color="white" style="light" href="/contact" />
          </div>
        </div>
      </section>
      {/* <LineDivider /> */}
    </>
  )
}

export default CallOut
