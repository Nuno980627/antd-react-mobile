import React from 'react'
interface ISvgProps {
  name: string
  prefix?: string
  color?: string
  width?: string
  height?: string
  size?: string
  className?: string
}
const SvgIcon: React.FC<ISvgProps> = ({
  name,
  prefix = 'icon',
  color = '#333',
  width,
  height,
  size = '28px',
  className,
  ...props
}) => {
  const symbolId = `#${prefix}-${name}`
  return (
    <svg
      className={className}
      width={width ? width : size}
      height={height ? height : size}
      {...props}
      aria-hidden="true"
    >
      <use href={symbolId} fill={color} />
    </svg>
  )
}

export default SvgIcon
