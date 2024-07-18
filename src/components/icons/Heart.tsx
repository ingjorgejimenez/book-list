import React from 'react'
import { IoHeart, IoHeartCircleOutline } from 'react-icons/io5'

interface HeartProps extends React.SVGProps<SVGSVGElement> {
  className?: string
  color?: string
  fill?: string
  height?: string
  width?: string
  isSelected?: boolean
}

const Heart = ({
  className = '',
  width = '19.39',
  height,
  fill = 'var(--body)',
  isSelected,
  ...props
}: HeartProps) => {
  const color = isSelected ? 'red' : fill
  return (
    <>
      <IoHeart
        size={width}
        className={`${className} drop-shadow-3xl`}
        color={color}
        {...props}
      />
    </>
  )
}

export default Heart
