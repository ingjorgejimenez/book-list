import { useState } from 'react'
import Heart from '../../icons/Heart'

import { IBookItem } from '@/interfaces'
import { IoHeartCircle, IoHeartCircleOutline } from 'react-icons/io5'

interface CardBookProps extends IBookItem {
  className?: string
}
export const CardBook = ({ className, title, cover }: CardBookProps) => {
  const [heart, setHeart] = useState<boolean>(false)
  return (
    <article
      className={`${className} max-w-md w-full px-5 pb-5 shadow-3xl rounded-xl overflow-hidden bg-white dark:bg-body block text-center md:text-left mb-4`}
    >
      <div className='relative grid mb-4 md:mb-0 aspect-[4/6] overflow-hidden'>
        <Heart
          className='absolute object-cover object-center px-1 bg-gray-300 rounded-lg cursor-pointer top-3 right-3 z-1'
          width='30px'
          isSelected={heart}
          onClick={() => {
            setHeart(prev => !prev)
          }}
        />

        <img
          className='object-cover w-full rounded-xl brightness-75'
          src={cover}
          alt={title}
        />
      </div>
      <div className={` flex items-end`}>
        <div className={` rounded`}>
          <div className='flex justify-between gap-4 mt-4'>
            <h4>{title}</h4>
            <div
              className={`grid self-end flex-shrink-0 overflow-hidden place-items-center rounded-xs `}
            ></div>
          </div>
        </div>
      </div>
    </article>
  )
}
