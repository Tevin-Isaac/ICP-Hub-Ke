import Button from 'components/atoms/Button'
import LineDivider from 'components/atoms/LineDivider'
import Tag from 'components/atoms/Tag'
import Text from 'components/atoms/Text'
import BlogAuthorCard from 'components/molecules/Card/BlogAuthorCard'
import BlogCard, { BlogCardProps } from 'components/molecules/Card/BlogCard'
import BlogCommentCard from 'components/molecules/Card/BlogCommentCard'
import InputGroup from 'components/molecules/FormGroup/InputGroup'
import TextAreaGroup from 'components/molecules/FormGroup/TextAreaGroup'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import randomString from 'utils/randomString'

const BlogDetail = () => {
  const thumbnailContainer: React.LegacyRef<HTMLDivElement> = useRef(null)
  const [thumbnailSize, setThumbnailSize] = useState({
    width: 850,
    height: 594,
  })
  const forestContainer: React.LegacyRef<HTMLDivElement> = useRef(null)
  const [forestImageSize, setForestImageSize] = useState({
    width: 850,
    height: 447,
  })
  useEffect(() => {
    if (thumbnailContainer.current?.clientWidth !== undefined) {
      setThumbnailSize({
        width: thumbnailContainer.current?.clientWidth,
        height: thumbnailContainer.current?.clientWidth / 1.43,
      })
    }
    if (forestContainer.current?.clientWidth !== undefined) {
      setForestImageSize({
        width: forestContainer.current?.clientWidth,
        height: forestContainer.current?.clientWidth / 1.9,
      })
    }
    window.addEventListener('resize', () => {
      if (thumbnailContainer.current?.clientWidth !== undefined) {
        setThumbnailSize({
          width: thumbnailContainer.current?.clientWidth,
          height: thumbnailContainer.current?.clientWidth / 1.43,
        })
      }
      if (forestContainer.current?.clientWidth !== undefined) {
        setForestImageSize({
          width: forestContainer.current?.clientWidth,
          height: forestContainer.current?.clientWidth / 1.9,
        })
      }
    })
  }, [thumbnailContainer, forestContainer])
  const blogListData: BlogCardProps[] = [
    {
      authorAvatarSrc: '/images/blog-author-4.webp',
      authorName: '',
      launchDate: 'Feb 20',
      lead: '',
      readTime: '8 min',
      thumbnailSrc: '/images/blog-thumbnail-4.webp',
      title: '',
    },
    {
      authorAvatarSrc: '/images/blog-author-5.webp',
      authorName: '',
      launchDate: 'Feb 23',
      lead: '',
      readTime: '12 min',
      thumbnailSrc: '/images/blog-thumbnail-5.webp',
      title: '',
    },
    {
      authorAvatarSrc: '/images/blog-author-6.webp',
      authorName: '',
      launchDate: 'Jan 28',
      lead: '',
      readTime: '12 min',
      thumbnailSrc: '/images/blog-thumbnail-6.webp',
      title: '',
    },
  ]
  return (
    <PageTemplate>
      <section className="grid place-items-center">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 text-center space-y-6"
          data-aos="zoom-in-up"
        >
          <PageSentence
            badge="BLOG DETAIL"
            title=""
          />
          <Text textStyle="BlogMeta" value={'Mar 11 • 3 min read'} />
        </div>
      </section>
      <section className="w-full flex flex-col items-center">
        <div
          className="w-12/12 md:w-10/12 mb-16"
          ref={thumbnailContainer}
          data-aos="fade-up"
        >
          <Image
            src="/images/blog-thumbnail-2.webp"
            width={thumbnailSize.width}
            height={thumbnailSize.height}
            quality={85}
            objectFit="cover"
            className="rounded-xl"
            alt="figma"
          />
        </div>
        <div className="w-12/12 sm:w-10/12 md:w-8/12 mb-6" data-aos="fade-up">
          <Text
            textStyle="BlogHeadline"
            value={``}
          />
        </div>
        <div className="w-12/12 sm:w-10/12 md:w-8/12 mb-10" data-aos="fade-up">
          <Text
            textStyle="BlogContent"
            value={``}
          />
        </div>
        <div
          className="w-12/12 sm:w-10/12 md:w-8/12 space-y-5 mb-14"
          data-aos="fade-up"
        >
          <Text textStyle="BlogSubtitle" value={`Greater hath rule`} />
          <Text
            textStyle="BlogContent"
            value={``}
          />
        </div>
        <div
          className="w-12/12 md:w-10/12 mb-16"
          ref={forestContainer}
          data-aos="fade-up"
        >
          <Image
            src="/images/forest.webp"
            width={forestImageSize.width}
            height={forestImageSize.height}
            quality={80}
            objectFit="cover"
            className="rounded-xl"
            alt="forest"
          />
        </div>
        <div className="w-12/12 sm:w-10/12 md:w-8/12 mb-10" data-aos="fade-up">
          <Text
            textStyle="BlogContent"
            value={``}
          />
        </div>
        <div
          className="w-12/12 sm:w-10/12 md:w-8/12 space-y-5 mb-16"
          data-aos="fade-up"
        >
          <Text
            textStyle="BlogSubtitle"
            value={``}
          />
          <Text
            textStyle="BlogContent"
            value={``}
          />
          <ul className="list-disc text-white pl-8">
            <li>
              <Text
                textStyle="BlogContent"
                value=""
              />
            </li>
            <li>
              <Text
                textStyle="BlogContent"
                value={``}
              />
            </li>
            <li>
              <Text
                textStyle="BlogContent"
                value={``}
              />
            </li>
            <li>
              <Text
                textStyle="BlogContent"
                value={``}
              />
            </li>
          </ul>
          <Text
            textStyle="BlogContent"
            value={``}
          />
        </div>
        <div
          className="w-12/12 sm:w-8/12 md:w-6/12 text-center space-y-5 mb-12"
          data-aos="fade-up"
        >
          <Text
            textStyle="BlogQuote"
            value={`“”`}
          />
          <Text textStyle="BlogQuoteName" value={`– Reinhold Niebuhr`} />
        </div>
        <div className="w-12/12 sm:w-10/12 md:w-8/12 mb-6" data-aos="fade-up">
          <Text
            textStyle="BlogContent"
            value={``}
          />
        </div>
        <div
          className="w-12/12 md:w-8/12 flex gap-5 flex-wrap mb-16"
          data-aos="fade-up"
        >
          <Tag value="Figma" />
          <Tag value="UI Design" />
          <Tag value="Curated List" />
        </div>
        <div className="w-12/12 md:w-8/12" data-aos="fade-up">
          <BlogAuthorCard
            avatarSrc="/images/blog-author-2.webp"
            name=""
            job={`UI Designer`}
            bio={`.`}
          />
        </div>
      </section>
      <section className="space-y-8">
        <Text textStyle="SectionTitle" value={`Other people also read ...`} />
        <div className="">
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
      </section>
      <LineDivider />
      <section className="grid place-items-center gap-20">
        <div className="text-center">
          <Text textStyle="SectionTitle" value={`Responses`} />
        </div>
        <div className="w-12/12 md:w-8/12 grid gap-12">
          <div data-aos="fade-up">
            <BlogCommentCard
              avatarSrc="/images/comment-avatar-1.webp"
              name=""
              time="8 min ago"
              content={``}
            />
          </div>
          <div data-aos="fade-up">
            <BlogCommentCard
              avatarSrc="/images/comment-avatar-2.webp"
              name=""
              time="20 min ago"
              content={``}
            />
          </div>
          <div data-aos="fade-up">
            <BlogCommentCard
              avatarSrc="/images/comment-avatar-3.webp"
              name="Esther Howard"
              time="34 min ago"
              content={``}
            />
          </div>
        </div>
        <div
          className="w-12/12 md:w-8/12 bg-light rounded-md p-10 space-y-6"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-2 gap-5">
            <InputGroup label="Name" />
            <InputGroup label="Email" />
          </div>
          <TextAreaGroup label="Comment" />
          <div className="flex justify-end">
            <Button value="" />
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}

export default BlogDetail
