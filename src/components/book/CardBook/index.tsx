import { IBookItem } from '@/interfaces'
import { FavoriteList } from './FavoriteList'
import { Link } from '@/router/Link'

interface CardBookProps {
  className?: string
  book: IBookItem
}

export const CardBook = ({ className, book }: CardBookProps) => {
  return (
    <article
      className={`${className} relative max-w-full w-full p-4  shadow-3xl rounded-xl overflow-hidden bg-white dark:bg-body block text-center md:text-left mb-4`}
    >
      <Link href={`/#/libro?id=${book.ISBN}`}>
        <div className='relative grid mb-4 md:mb-0 aspect-[4/6] overflow-hidden rounded-xl'>
          <img
            className='object-cover w-full h-full rounded-xl brightness-75 hover:scale-105'
            src={book.cover}
            alt={book.title}
          />
        </div>
        <div className={`flex items-end`}>
          <div className={` rounded`}>
            <div className='flex justify-between gap-4 mt-4'>
              <h4 className='mb-0 line-clamp-1'>{book.title}</h4>
              {/* <div
              className={`grid self-end flex-shrink-0 overflow-hidden place-items-center rounded-xs `}
            ></div> */}
            </div>
          </div>
        </div>
      </Link>
      <FavoriteList book={book} />
    </article>
  )
}
