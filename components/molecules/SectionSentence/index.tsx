import Text from 'components/atoms/Text'
import React from 'react'

interface SectionSentenceProps {
  badge?: string
  lightBadge?: string
  title?: string
  lightTitle?: string
  paragraph?: string
  badgeStyle?: 'success' | 'error'
  link?: string
  linkText?: string
}

const SectionSentence = ({
  title = '',
  paragraph = '',
  badge = '',
  lightBadge = '',
  badgeStyle = 'success',
  link = '',
  linkText = '',
  lightTitle = '',
}: SectionSentenceProps) => {
  return (
    <article className="space-y-6">
      {title === '' && badge === '' && lightTitle === '' && lightBadge === '' ? (
        ''
      ) : (
        <div className="space-y-1">
          {badge === '' && lightBadge === '' ? (
            ''
          ) : (
            <Text
              value={lightBadge || badge}
              textStyle={
                lightBadge
                  ? 'SectionBadgeLight'
                  : badgeStyle === 'success'
                  ? 'SectionBadge'
                  : 'SectionBadgeError'
              }
            />
          )}
          {title === '' && lightTitle === '' ? (
            ''
          ) : (
            <Text value={lightTitle || title} textStyle={lightTitle ? 'SectionTitleLight' : 'SectionTitle'} />
          )}
        </div>
      )}
      {paragraph === '' ? '' : <Text value={paragraph} textStyle="SectionParagraph" />}
      {link === '' || linkText === '' ? (
        ''
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
          {linkText}
        </a>
      )}
    </article>
  )
}

export default SectionSentence