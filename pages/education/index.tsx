import React from 'react'
import PageTemplate from 'components/templates/PageTemplate'
import PageSentence from 'components/molecules/PageSentence'
import LineDivider from 'components/atoms/LineDivider'
import Footer from 'components/organisms/Footer'


const Services = () => {
  return (
    <>
<PageTemplate title="Education - ICP Hub Kenya">
  <section className="grid place-items-center" data-aos="">
    <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12">
      <PageSentence
            badge="🎖️ BOUNTIES"
            title="🚀Be Certified!"
            description="Enroll in our free dacade course and embark on an exciting adventure into the world of decentralized applications on ICP. Complete the course and earn a Certificate and ICP Tokens!"
            link={{ href: 'https://dacade.org/communities/icp', text: 'Explore the dacade Course' }}
          />
   
      {/* Additional Courses */}
      {/* <PageSentence
            badge="🔥 TYPESCRIPT"
            title="🚀 Unleash Your TypeScript Mastery"
            description="Take your TypeScript skills to new heights with our Typescript 201 course. Dive deep into advanced concepts and unlock your full potential."
            link={{ href: 'https://dacade.org/communities/icp/challenges/0c140f50-2c47-412b-985c-092c1eece05b', text: 'Enroll in Typescript 201' }}
      />
      <PageSentence
     badge="🌱 TYPESCRIPT"
     title="🚀 Kickstart Your TypeScript Journey"
     description="Begin your TypeScript adventure with our Typescript 101 course. Master the fundamentals and lay a solid foundation for your development career."
     link={{ href: 'https://dacade.org/communities/icp/challenges/256f0a1c-5f4f-495f-a1b3-90559ab3c51f', text: 'Enroll in Typescript 101' }}
      />
      <PageSentence
   badge="🧠 ARTIFICIAL INTELLIGENCE"
   title="🚀 Unlock the Power of AI-Powered dApps"
   description="Explore the cutting-edge intersection of Artificial Intelligence and decentralized applications. Learn how to develop innovative AI-powered dApps."
   link={{ href: 'https://dacade.org/communities/icp/challenges/b549466d-5ff5-5f4c-b66b-52f2899309b5', text: 'Enroll in AI Dapp Development 101' }}

      />
      <PageSentence
      badge="🦀 RUST"
      title="🚀 Master Rust for Smart Contract Development"
      description="Discover the power of Rust for building secure and efficient smart contracts. Learn the fundamentals of Rust programming language in our Rust Smart Contract 101 course."
      link={{ href: 'https://dacade.org/communities/icp/challenges/c04ec537-c4a7-4681-9c62-2b7571d55a5e', text: 'Enroll in Rust Smart Contract 101' }}

      /> */}
    </div>
  </section>
  <Footer /> 
  <LineDivider />
</PageTemplate>

    </>
  )
}

export default Services
