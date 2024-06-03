import htmlParser from 'html-react-parser'
interface TextProps {
  value: string
  textStyle:
    | 'SectionBadge'
    | 'SectionBadgeError'
    | 'SectionBadgeLight'
    | 'SectionParagraph'
    | 'PageTitle'
    | 'PageDescription'
    | 'SectionTitle'
    | 'SectionTitleLight'
    | 'CardTitle'
    | 'CardParagraph'
    | 'PricingPrice'
    | 'PricingTitle'
    | 'PricingDetail'
    | 'PricingSubtitle'
    | 'IconListValue'
    | 'IconListLabel'
    | 'ProjectTitle'
    | 'ProjectTitleLight'
    | 'ProjectDescription'
    | 'ProjectDescriptionLight'
    | 'SmallCardTitle'
    | 'SmallCardDescription'
    | 'FeatureCardTitle'
    | 'FeatureCardDescription'
    | 'FAQDescription'
    | 'FAQTitle'
    | 'StatisticValue'
    | 'StatisticLabel'
    | 'TestimonialCompany'
    | 'TestimonialName'
    | 'TestimonialDescription'
    | 'TeamName'
    | 'TeamJob'
    | 'BlogTitle'
    | 'BlogLead'
    | 'BlogMeta'
    | 'ProjectDetailLabel'
    | 'ProjectDetailValue'
    | 'PageContent'
    | 'PageSubtitle'
    | 'BlogHeadline'
    | 'BlogContent'
    | 'BlogSubtitle'
    | 'BlogQuote'
    | 'BlogQuoteName'
    | 'AuthorName'
    | 'AuthorNamePreview'
    | 'AuthorJob'
    | 'AuthorBio'
    | 'CommentTime'
    | 'CommentName'
    | 'CommentContent'
    | 'FooterLinkGroupTitle'
    | 'IconListValueWithoutKey'
}
const Text = ({ value, textStyle }: TextProps) => {
  const getTextStyle = (): string => {
    switch (textStyle) {
      case 'SectionBadge':
        return 'text-[#F0BC39] font-semibold text-base leading-8'
      case 'SectionBadgeError':
        return 'text-error font-semibold text-base leading-8'
      case 'SectionBadgeLight':
          return 'text-[#5E2222] font-semibold text-base leading-8'
      case 'SectionTitle':
        return 'text-white font-bold text-3xl leading-12'
      case 'SectionTitleLight': 
        return 'text-[#5E2222] font-bold text-3xl leading-12'
      case 'SectionParagraph':
        return 'text-muted font-medium text-base leading-8'
      case 'PageTitle':
        return 'pt-12 mb-[-70px] text-white font-bold text-4xl leading-13.5'
      case 'PageDescription':
        return 'text-muted font-medium text-base leading-8'
      case 'PageSubtitle':
        return 'text-white font-bold text-3xl leading-12'
      case 'PageContent':
        return 'text-white font-medium text-base leading-8.5'
      case 'PricingPrice':
        return 'text-white font-bold text-4xl leading-12'
      case 'PricingTitle':
        return 'text-white font-bold text-base leading-5.5'
      case 'PricingSubtitle':
        return 'text-muted font-normal text-xs leading-4'
      case 'PricingDetail':
        return 'text-white font-medium text-base leading-9'
      case 'ProjectTitle':
        return 'text-white font-bold text-xl leading-8.5'
      case 'ProjectTitleLight': 
        return 'text-[#313131] font-bold text-xl leading-8.5'
      case 'ProjectDescription':
        return 'text-muted font-normal text-base leading-8.5'
      case 'ProjectDescriptionLight':
        return 'text-[#313131] font-normal text-base leading-8.5'
      case 'ProjectDetailLabel':
        return 'text-muted font-semibold text-sm leading-5'
      case 'ProjectDetailValue':
        return 'text-white font-semibold text-base leading-5.5'
      case 'SmallCardTitle':
        return 'text-white font-semibold text-sm leading-5.5'
      case 'SmallCardDescription':
        return 'text-muted font-normal text-sm leading-6'
      case 'FeatureCardTitle':
        if (value.includes('Education')) {
          return 'text-black font-bold text-lg leading-6' 
        }
        return 'text-white font-bold text-lg leading-6'
      case 'FeatureCardDescription':
        if (value.includes('Our educational programs are designed to empower individuals and organizations with the skills and expertise needed to navigate the the blockchain and Internet Computer ecosystem.')) {
          return 'text-black font-medium text-base leading-8'
        }
        return 'text-muted font-medium text-base leading-8'
      case 'FAQTitle':
        return 'text-white font-bold text-xl leading-12'
      case 'FAQDescription':
        return 'text-muted font-medium text-base leading-8'
      case 'StatisticLabel':
        return 'text-muted font-bold text-base leading-5.5'
      case 'StatisticValue':
        return 'text-white font-bold text-4xl leading-12'
      case 'TestimonialCompany':
        return 'text-muted font-medium text-sm leading-5'
      case 'TestimonialName':
        return 'text-white font-bold text-lg leading-6'
      case 'TestimonialDescription':
        return 'text-muted font-medium text-base leading-8'
      case 'TeamName':
        return 'text-white font-bold text-lg leading-6'
      case 'TeamJob':
        return 'text-muted font-medium text-sm leading-5'
      case 'BlogTitle':
        return 'text-white font-bold text-xl leading-8.5'
      case 'BlogLead':
        return 'text-muted font-medium text-lg leading-8.5'
      case 'BlogMeta':
        return 'text-muted font-normal text-sm leading-5'
      case 'BlogHeadline':
        return 'text-white font-medium text-xl leading-10'
      case 'BlogContent':
        return 'text-white font-medium text-base leading-8.5'
      case 'BlogSubtitle':
        return 'text-white font-bold text-3xl leading-12'
      case 'BlogQuote':
        return 'text-white font-medium text-xl leading-10'
      case 'BlogQuoteName':
        return 'text-white font-medium text-sm leading-5'
      case 'AuthorName':
        return 'text-white font-semibold text-xl leading-7'
      case 'AuthorNamePreview':
        return 'text-white font-semibold text-base leading-7'
      case 'AuthorJob':
        return 'text-muted font-semibold text-xs leading-4'
      case 'AuthorBio':
        return 'text-white font-medium text-base leading-8.5'
      case 'CommentTime':
        return 'text-muted font-normal text-sm leading-5'
      case 'CommentName':
        return 'text-white font-semibold text-xl leading-7'
      case 'CommentContent':
        return 'text-white font-medium text-base leading-8'
      case 'CommentContent':
        return 'text-white font-medium text-base leading-8'
      case 'FooterLinkGroupTitle':
        return 'text-white font-medium text-sm leading-5'
      case 'IconListLabel':
        return 'text-muted font-medium text-base leading-5.5'
      case 'IconListValue':
        return 'text-white font-bold text-xl leading-7'
      case 'IconListValueWithoutKey':
        return 'text-white font-medium text-base leading-8'
      default:
        throw Error('Invalid textStyle')
    }
  }

  return <p className={getTextStyle()}>{htmlParser(value)}</p>
}

export default Text
export type { TextProps }
