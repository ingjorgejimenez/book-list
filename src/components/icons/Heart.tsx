import { IoHeart } from 'react-icons/io5'

interface HeartProps extends React.SVGProps<SVGSVGElement> {
  className?: string
  color?: string
  fill?: string
  height?: string
  width?: string
  isSelected?: boolean
  onClick?: React.MouseEventHandler<SVGSVGElement>
}

const Heart = ({
  className = '',
  width = '19.39',
  fill = 'var(--body)',
  isSelected,
  onClick,
  ...props
}: HeartProps) => {
  const color = isSelected ? 'red' : fill
  return (
    <>
      <IoHeart
        size={width}
        className={`${className} drop-shadow-3xl`}
        color={color}
        onClick={onClick}
        {...props}
      />
    </>
  )
}

export default Heart
