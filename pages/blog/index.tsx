import Button from 'components/atoms/Button'
import LineDivider from 'components/atoms/LineDivider'
import BlogCard, { BlogCardProps } from 'components/molecules/Card/BlogCard'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import Link from 'next/link'
import React from 'react'
import randomString from 'utils/randomString'

const Blog = () => {
  const blogListData: BlogCardProps[] = [
    {
      authorAvatarSrc: '/images/Orlah.png',
      authorName: 'Peace Adekoya',
      launchDate: 'April 12, 2024',
      lead: 'The Web3 Community has just experienced a new groundbreaking initiative: the Olympus Acceleration platform. This platform represents a significant step toward Web3 acceleration.',
      readTime: '',
      thumbnailSrc: '/images/Blog1.png',
      title: 'Introducing Olympus: The first Web3 Accelerator Platform on the Internet Computer',
    },
    {
      authorAvatarSrc: '/images/Orlah.png',
      authorName: 'Peace Adekoya',
      launchDate: 'Mar 28, 2024',
      lead: 'Let us explore how developers can use AI, especially within ICP and OpenAI collaboration to take their blockchain projects to the next level!',
      readTime: '',
      thumbnailSrc: '/images/Blog2.png',
      title: 'Enhancing Blockchain Development with AI: A Guide for Developers',
    },
    {
      authorAvatarSrc: '/images/Orlah.png',
      authorName: 'Peace Adekoya',
      launchDate: 'Mar 13, 2024',
      lead: 'In this guide, we walk through how to build a token on ICP from conceptualization to deplpoyement',
      readTime: '',
      thumbnailSrc: '/images/Blog3.png',
      title: 'How to build a token on ICP: A step by step guide',
    },
    
  ]
  return (
    <PageTemplate>
      <section className="grid place-items-center">
        <div className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center" data-aos="zoom-in-uo">
          <PageSentence
            badge="ICP Hub Kenya Blog"
            title="All about blockchain"
            description='Check out some of our blogs and learn how ICP is revolutionizing the blockchain space'
          />
        </div> 
      </section>
      <LineDivider />
      <section className="grid place-items-center gap-16">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 sm:gap-x-5">
          {blogListData.map((data) => {
            return (
              <Link href="/blog/detail" key={randomString(64)}>
                <div data-aos="fade-up">
                  <BlogCard
                    authorAvatarSrc={data.authorAvatarSrc}
                    authorName={data.authorName}
                    launchDate={data.launchDate}
                    lead={data.lead}
                    readTime={data.readTime}
                    thumbnailSrc={data.thumbnailSrc}
                    title={data.title}
                  />
                </div>
              </Link>
            )
          })}
        </div>

        <div className="">
          <Button value='Load More' color='white' style='light' />
        </div>

      </section>
    </PageTemplate>
  )
}

export default Blog
