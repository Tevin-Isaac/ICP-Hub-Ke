import LineDivider from 'components/atoms/LineDivider'
import TeamCard from 'components/molecules/Card/TeamCard'
import PageSentence from 'components/molecules/PageSentence'
import SectionSentence from 'components/molecules/SectionSentence'

import StatisticList from 'components/organisms/StatisticList'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'
import Footer from 'components/organisms/Footer'

const About = () => {
  return (
    <PageTemplate title="About - ICP Hub Kenya">
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
        <aside className="w-full" data-aos="">
          <div className="w-full h-[560px] relative">
            <Image
              src={'/images/about-illustration.webp'}
              layout="fill"
              objectFit="contain"
              quality={80}
              alt="Programmers when coding in their laptop"
              
            />
          </div>
        </aside>
        <aside
          className="text-center sm:w-10/12 md:w-8/12 lg:w-full lg:text-left"
          data-aos=""
        >
          <PageSentence
            badge="ABOUT"
            title="ICP HUB KENYA"
            description={`

            Welcome to ICP Hub Kenya, a pioneering force dedicated to advancing blockchain technology across the region and beyond. As one of the  esteemed ICP Hubs worldwide, our mission is clear: to empower individuals and organizations through education, collaboration, and innovation in the realm of blockchain. With a steadfast commitment to fostering a vibrant ecosystem, we strive to catalyze growth, drive adoption, and unlock the transformative potential of blockchain technology for a brighter future. Join us on this journey as we shape the landscape of tomorrow, one block at a time in Africa.`}
          />
        </aside>
      </section>
      <LineDivider />
      <section className="grid place-items-center gap-16">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
          data-aos=""
        >
          <SectionSentence
            badge="STATISTICS"
            title="In 1 year we have done more than 20 successful Hackathons,Trained more than 1000 Blockchain Developers and Incubated more than 10 major Start Ups"
          />
        </div>
        <div className="w-full grid gap-14">
          <div data-aos="">
            <StatisticList />
          </div>
       
        </div>
      </section>
      <section className="grid place-items-center gap-6">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
          data-aos=""
        >
          <SectionSentence
            badge="OUR TEAM"
            title="Meet the team! All the Credit goes to these Hardworking people"
          />
        </div>
        <div className="w-full grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div data-aos="">
            <TeamCard
              imageSrc="/images/yvonne.png"
              job="Co-Founder"
              name="Yvonne Kagondu"
            />
          </div>
          <div data-aos="">
            <TeamCard
              imageSrc="/images/tevin.png"
              job="Developer Relations"
              name="Tevin Isaac"
            />
          </div>
          <div data-aos="">
            <TeamCard
              imageSrc="/images/Mary.png"
              job="Project Manager"
              name="Mary Usaji"
            />
          </div>
          <div data-aos="">
            <TeamCard
              imageSrc="/images/steve.png"
              job="Project Manager"
              name="Steve Kimoi"
            />
          </div>
          <div data-aos="">
            <TeamCard
              imageSrc="/images/bella.png"
              job="Community Manager"
              name="Bellah Chris"
            />
          </div>
          <div data-aos="">
            <TeamCard
              imageSrc="/images/sammy.png"
              job="Sammy Flash"
              name="Lead Designer"
            />
          </div>
          <div data-aos="">
            <TeamCard
              imageSrc="/images/maic.png"
              job="Maïc Sebakara"
              name="ICP Rwanda Spoke"
            />
          </div>
          <div data-aos="">
            <TeamCard
              imageSrc="/images/orlah.png"
              job="Peace Adekoya"
              name="Social Media Manager"
            />
          </div>
          <div data-aos="">
            <TeamCard
              imageSrc="/images/charles.png"
              job="Charles Maina"
              name="Technical Writer"
            />
          </div>
        </div>
      </section>
      <Footer /> 
    </PageTemplate>
  )
}

export default About
