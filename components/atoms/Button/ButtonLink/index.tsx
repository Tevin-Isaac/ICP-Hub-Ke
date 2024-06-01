import Button, { ButtonProps } from 'components/atoms/Button'
import React from 'react'

interface ButtonLinkProps extends ButtonProps {
  href: string
}

const ButtonLink = ({
  href,
  value,
  onClick = () => {},
  size = 'normal',
  style = 'solid',
  color = 'primary',
  radius = 'rounded',
}: ButtonLinkProps) => {
  return (
    <a href={href}>
      <Button
        value={value}
        color={color}
        onClick={onClick}
        radius={radius}
        size={size}
        style={style}
      />
    </a>
  )
}

export default ButtonLink
export type { ButtonLinkProps }