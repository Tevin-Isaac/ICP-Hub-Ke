import Image from 'next/image'
import Button from 'components/atoms/Button'
import ButtonLink from 'components/atoms/Button/ButtonLink'
import Text from 'components/atoms/Text'

interface ProjectCardProps {
  title: string
  description: string
  imageSource: string
  imageAlt: string
  height?: number
  width?: number
}

const ProjectCard = ({
  title,
  description,
  imageSource,
  imageAlt,
  height = 450,
  width,
}: ProjectCardProps) => {
  return (
    <div className="w-full">
      <div className="relative w-full overflow-hidden" style={{ height: `${height}px` }}>
        <Image
          src={imageSource}
          alt={imageAlt}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex flex-col place-items-center text-center mt-10">
        <div className="mb-2.5">
          <Text value={title} textStyle="ProjectTitle" />
        </div>
        <div className="mb-9">
          <Text value={description} textStyle="ProjectDescription" />
        </div>
        <div className="">
          <ButtonLink
            value="Detail"
            color="white"
            radius="pill"
            style="outline"
            href="https://internetcomputer.org/"
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard