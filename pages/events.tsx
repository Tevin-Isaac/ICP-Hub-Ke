import Button from 'components/atoms/Button'
import LineDivider from 'components/atoms/LineDivider'
import PageSentence from 'components/molecules/PageSentence'
import SectionSentence from 'components/molecules/SectionSentence'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'

const Events = () => {
  return (
    <PageTemplate>

      <section className="grid place-items-center">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center" data-aos="">
          <PageSentence
            badge="UPCOMING EVENTS"
            title="Here are some of our upcoming events"
            description="You can scroll down to check some of the events we've had in the past"
          />
        </div>
      </section>

      <LineDivider />

      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-5">
        <aside className="w-full" data-aos="">
          <div className="w-full h-[410px] relative">
            <div>
              <Image
                src={'/images/Memethon.png'}
                quality={100}
                layout="fill"
                objectFit="contain"
                alt='Memethon Image'
              />
            </div>
          </div>
        </aside>
        <aside className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left" data-aos="">
          <SectionSentence
            badge="Hackathon"
            title={`Memethon Hackerhouse`}
            paragraph={"We will be having our Memethon Hackerhouse happening from 17th - 19th May 2024. Register via the link below"}
            link='https://lu.ma/memethon-hackerhouse'
            linkText='Check out event on luma'
          />
        </aside>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-5">
        <aside className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left" data-aos="">
          <SectionSentence
            badge="Hackathon"
            title={`CSH Safari Computer Club Hackathon`}
            paragraph={"We will be having our CSH Safari Computer Club Hackathon happening from 4th - 9th May 2023"}
            link='https://lu.ma/tqrfywhr'
            linkText='Check out event on luma'
          />
        </aside>
        <aside className="w-full" data-aos="">
          <div className="w-full h-[410px] relative">
            <div>
              <Image
                src={'/images/CSHHackathon.avif'}
                quality={100}
                layout="fill"
                objectFit="contain"
                alt='CSH Hackathon Image'
              />
            </div>
          </div>
        </aside>
      </section>

      <LineDivider />



      <section className="grid place-items-center">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center" data-aos="">
          <PageSentence
            badge="PAST EVENTS"
            title="Here are some of the events we've done"
          />
        </div>
      </section>

      <LineDivider />

      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-5">
        <aside className="w-full" data-aos="">
          <div className="w-full h-[410px] relative">
            <div>
              <Image
                src={'/images/ETHSafari1.jpg'}
                quality={100}
                layout="fill"
                objectFit="contain"
                alt='ICP ETH Safari image'
              />
            </div>
            {/* <div>
              <Image
                src={'/images/ETHSafari2.jpg'}
                quality={100}
                layout="fill"
                objectFit="contain"
                alt='ICP ETH Safari image'
              />
            </div> */}
          </div>
        </aside>
        <aside className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left" data-aos="">
          <SectionSentence
            badge="Hackathon and Sponsors"
            title={`ETH Safari`}
            paragraph={"We participated at ETH Safari as one of the main sponsors and also at the hackathon. It was our first hackathon as a hub. We saw 20 submissions for projects that were built on top of ICP."}
          />
        </aside>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-5">
        <aside className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left" data-aos="">
          <SectionSentence
            badge="Hackathon"
            title={`Pwani Innovation Week`}
            paragraph="We participated in Pwani Innovation Week 2023 hacakthon. It was succesfull as we had over 10+ projects built on top of ICP."
          />
        </aside>
        <aside className="w-full" data-aos="">
          <div className="w-full h-[410px] relative">
            <Image
              src={'/images/PIW2.jpg'}
              quality={100}
              layout="fill"
              objectFit="contain"
              alt='Pwani Innovation Week'
            />
          </div>
        </aside>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 lg:gap-5">
        <aside className="w-full" data-aos="">
          <div className="w-full h-[410px] relative">
            <Image
              src={'/images/MachakosHackathon.jpg'}
              quality={100}
              layout="fill"
              objectFit="contain"
              alt='Machakos ICP Hackathon'
            />
          </div>
        </aside>
        <aside className="sm:w-10/12 md:w-8/12 lg:w-full text-center lg:text-left" data-aos="">
          <SectionSentence
            badge="Hackathon"
            title={`Machakos University Hackathon`}
            paragraph="We held a hackathon in machakos university that saw over 50+ participants and 10 projects built."
          />
        </aside>
      </section>

      <section className='grid place-items-center'>
        <div className="">
          <Button value='Load More' color='white' style='light' />
        </div>
      </section>

      <LineDivider />
    </PageTemplate>
  )
}

export default Events
