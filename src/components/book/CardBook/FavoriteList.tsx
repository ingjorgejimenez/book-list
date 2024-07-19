import Heart from '@/components/icons/Heart'
import { IBookItem } from '@/interfaces'
import { useBookStore } from '@/store'
import { useEffect, useState } from 'react'

interface FavoriteProsp {
  book: IBookItem
  className?: string
  width?: string
  showLabel?: boolean
}
export const FavoriteList = ({
  book,
  className,
  width = '35px',
  showLabel = false,
}: FavoriteProsp) => {
  const [heart, setHeart] = useState<boolean>(false)
  const { addBook, removeBook, bookList } = useBookStore()
  const changeHeartBook = (book: IBookItem, state: boolean) => {
    setHeart(state)
    state ? addBook(book) : removeBook(book)
  }
  useEffect(() => {
    const isFavorite = bookList.some(item => item.ISBN === book.ISBN)
    setHeart(isFavorite)
  }, [])

  return (
    <div
      className={`${className} ${
        showLabel ? 'static' : 'absolute'
      }  cursor-pointer top-7 right-7 z-1`}
    >
      {showLabel && (
        <span className='block mb-4 text-base font-semibold'>
          {heart
            ? 'Eliminar de lista de lectura'
            : 'Agregar a lista de lectura'}
        </span>
      )}
      <Heart
        className={`object-cover object-center px-1 bg-gray-300 rounded-lg`}
        width={width}
        isSelected={heart}
        onClick={() => {
          changeHeartBook(book, !heart)
        }}
      />
    </div>
  )
}
