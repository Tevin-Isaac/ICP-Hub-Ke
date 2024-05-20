import Text from 'components/atoms/Text'
import React from 'react'

interface SectionSentenceProps {
  badge?: string
  title?: string
  paragraph?: string
  badgeStyle?: 'success' | 'error'
  link?: string
  linkText?: string
}

const SectionSentence = ({
  title = '',
  paragraph = '',
  badge = '',
  badgeStyle = 'success',
  link = '',
  linkText = '',
}: SectionSentenceProps) => {
  return (
    <article className="space-y-6">
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
          {title === '' ? '' : <Text value={title} textStyle="SectionTitle" />}
        </div>
      )}
      {paragraph === '' ? (
        ''
      ) : (
        <Text value={paragraph} textStyle="SectionParagraph" />
      )}
      {link === '' || linkText === '' ? (
        ''
      ) : (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
        >
          {linkText}
        </a>
      )}
    </article>
  )
}

export default SectionSentence