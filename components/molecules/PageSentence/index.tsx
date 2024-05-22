import Text from 'components/atoms/Text'
import React from 'react'
import Link from 'next/link'

interface SectionSentenceProps {
  badge?: string
  title?: string
  description?: string
  badgeStyle?: 'success' | 'error'
  link?: {
    href: string
    text: string
  }
}

const PageSentence = ({
  title = '',
  description = '',
  badge = '',
  badgeStyle = 'success',
  link,
}: SectionSentenceProps) => {
  return (
    <article className={`space-y-6`}>
      {title === '' && badge === '' ? (
        ''
      ) : (
        <div className="space-y-1">
          {badge === '' ? (
            ''
          ) : (
            <Text
              value={badge}
              textStyle={badgeStyle === 'success' ? 'SectionBadge' : 'SectionBadgeError'}
            />
          )}
          {title === '' ? '' : <Text value={title} textStyle="PageTitle" />}
        </div>
      )}
      {description === '' ? (
        ''
      ) : (
        <Text value={description} textStyle="PageDescription" />
      )}
      {/* Render the link section if the link prop is provided */}
      {link ? (
        <div className="mt-4">
          <Link href={link.href}>
            <a className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300">
              <span className="mr-2">{link.text}</span>
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </Link>
        </div>
      ) : null}
    </article>
  )
}

export default PageSentence
