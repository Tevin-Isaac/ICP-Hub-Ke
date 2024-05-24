import ButtonLink from 'components/atoms/Button/ButtonLink'
import LineDivider from 'components/atoms/LineDivider'
import FeatureCard from 'components/molecules/Card/FeatureCard'
import PageSentence from 'components/molecules/PageSentence'
import PricingCard from 'components/molecules/Card/PricingCard'
import ProjectCard from 'components/molecules/Card/ProjectCard'
import SectionSentence from 'components/molecules/SectionSentence'
import LogoList from 'components/organisms/LogoList'
import TestimonialList from 'components/organisms/TestimonialList'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'
import { FiFigma, FiCode, FiBox } from 'react-icons/fi'

const Home = () => {
  return (
    <>
      <PageTemplate title="Home - ICP HUB KE">
        {/* Banner Section */}
        <section
          className="flex flex-col gap-10 items-center"
          data-aos="fade-up"
        >
          <div className="w-10/12 md:w-8/12 text-center">
            <PageSentence
              title="Ushering A New Era Of Decentralized Applications."
              description="At the forefront of technology is ICP.Hub Kenya dedicated to advancing the Internet Computer ecosystem."
              badge=""
            />
          </div>
          <div className="flex flex-col gap-6 sm:flex-row w-full sm:w-fit">
            <ButtonLink value="Explore" href="/quote" />
            <ButtonLink
              value="Learn More"
              color="white"
              style="light"
              href="/about"
            />
          </div>
        </section>
        {/* Feature List */}
        <section className="grid grid-cols-1 gap-5 md:grid-cols-3 mb-16">
          <div data-aos="fade-up">
            <FeatureCard
              title="Apply For Grants"
              description="We believe in nurturing innovation and empowering visionaries. Our grant services are designed to provide the financial support and resources needed to turn your groundbreaking ideas into reality."
              icon={<FiFigma />}
            />
          </div>
          <div data-aos="fade-up">
            <FeatureCard
              title="Education"
              description="Our educational programs are designed to empower individuals and organizations with the skills and expertise needed to navigate the the blockchain and Internet Computer ecosystem."
              icon={<FiCode />}
            />
          </div>
          <div data-aos="fade-up">
            <FeatureCard
              title="Innovation Incubator"
              description="Our Incubator Program is at the heart of our mission to inspire creativity and drive progress within the blockchain and Internet Computer community."
              icon={<FiBox />}
            />
          </div>
        </section>
        {/* Logo List */}
        <LogoList />
        {/* How We Work */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
  <aside className="w-full h-[400px] relative" data-aos="fade-right">
    {/* Replace the Image component with an iframe for YouTube video */}
    <iframe
      className="w-full h-full absolute inset-0"
      src="https://www.youtube.com/embed/mqLoCgpDotI"
      title="Video"
      frameBorder="0"
      allowFullScreen
    ></iframe>
  </aside>
  <aside
    className="text-center sm:w-10/12 lg:text-left lg:w-full"
    data-aos="fade-left"
  >
    <SectionSentence
      title="What is the
      ICP blockchain?"
      paragraph="ICP's vision is that most of the world's software will be replaced by smart contracts. To realize that vision, ICP is designed to make smart contracts as powerful as traditional software."
      badge="WHAT WE DO"
    />
  </aside>
</section>

        {/* Our Teams */}
        <section className="grid grid-cols-1 gap-6 sm:gap-8 place-items-center lg:grid-cols-2">
          <aside className="text-center sm:w-10/12 lg:text-left lg:w-full">
            <div className="space-y-12" data-aos="fade-right">
              <SectionSentence
                title="We are a team of Developers,Project Managers,Community Managers,Designers,Technical Writers and Social Media Managers"
                paragraph="Our team is driven by a shared commitment to empowering individuals and businesses with the transformative potential of this groundbreaking technology. Through innovation, education, and community engagement, we strive to pave the way for a more inclusive and decentralized digital future."
                badge="OUR TEAM"
              />
              <ButtonLink
                value="See Our Team"
                href="/teams"
                size="small"
                color="white"
                style="light"
              />
            </div>
          </aside>
          <aside
            className="w-full h-[400px] relative sm:w-8/12 lg:w-full"
            data-aos="fade-left"
          >
            <Image
              src={'/images/team-illustration.svg'}
              layout="fill"
              objectFit="fill"
              alt="Code editor and UI Editing popup"
            />
          </aside>
        </section>
        <LineDivider />
        {/* Our Projects */}
        <section className="flex flex-col gap-16 items-center">
          <div
            className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
            data-aos="zoom-in-up"
          >
            <SectionSentence
              title="ICP has unique features"
              badge="WHAT ICP OFFERS TODAY"
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5">
            <div data-aos="flip-left">
              <ProjectCard
                title="Dev friendliness"
                description="Developers can write contracts using popular languages like Rust, TypeScript, or Python and easily incorporate libraries from their respective ecosystem, much like they would in traditional web development."
                imageSource='/images/DevFriendly2.png'
                imageAlt='ICP Developer languages'
              />
            </div>
            <div data-aos="flip-right">
              <ProjectCard
                title="Interoperability"
                description="ICP can interface with other smart contract blockchains and traditional (Web 2) internet resources via HTTP requests and signing capabilities. Chain-Key Cryptography has made this possible. "
                imageSource='/images/Interopability.png'
                imageAlt='Interopability on ICP'
              />
            </div>
          </div>

          <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5">
            <div data-aos="flip-left">
              <ProjectCard
                title="Everything On-Chain"
                description="ICP allows developers to host their applications fully on-chain (i.e frontend and smart contract), big thanks to the web-serving capability of canister smart contracts on ICP and their ability to host large amounts of data. DeFi platforms can exist 100% onchain with no dependency on centralized components."
                imageSource='/images/ICPOnchain.png'
                imageAlt='Host everything on chain using ICP'
              />
            </div>
            <div data-aos="flip-right">
              <ProjectCard
                title="Very very cheap!"
                description="The cost of storing data on-chain with ICP is just $5 USD per GB per year. This is significantly lower as compared to other chains such as Ethereum and Solana"
                imageSource='/images/VeryCheap.png'
                imageAlt='ICP is very cheap as compared to other chains'
              />
            </div>
          </div>

        </section>
        {/* Prices */}
        {/* <section className="flex flex-col gap-16 items-center">
          <div
            className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12"
            data-aos="zoom-in-up"
          >
            <SectionSentence
              title="What are the key design choices ICP makes to achieve these capabilities?"
              badge="ICP IS THE FUTURE"
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            <div data-aos="fade-up-right">
              <PricingCard
                price="1200$"
                title="UI Design"
                features={[
                  '10 design pages',
                  'Well-documented',
                  '4 revisions',
                  '$100/additional page',
                ]}
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <PricingCard
                price="5000$"
                title="Development"
                features={[
                  'Web & Mobile',
                  'Well-documented',
                  '8 revisions',
                  '$1000/additional page',
                ]}
              />
            </div>
            <div data-aos="fade-up-left">
              <PricingCard
                price="3000$"
                title="Maintenance"
                features={[
                  'Daily backup',
                  '3 hours of maintenance',
                  'Including fixing',
                  '$50/additional hour',
                ]}
              />
            </div>
          </div>
        </section> */}
        {/* Testimonial */}
        {/* <section className="flex flex-col gap-16 items-center">
          <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12" data-aos="zoom-in-up">
            <SectionSentence
              title="What do some of our Sponsored partners say ?"
              badge="TESTIMONIAL"
            />
          </div>
          <div className="w-full" data-aos="fade-up">
            <TestimonialList />
          </div>
        </section> */}
      </PageTemplate>
    </>
  )
}

export default Home
