import Heart from '@/components/icons/Heart'
import { IBookItem } from '@/interfaces'
import { useBookStore } from '@/store'
import { useEffect, useState } from 'react'

interface FavoriteProsp {
  book: IBookItem
}
export const FavoriteList = ({ book }: FavoriteProsp) => {
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
    <Heart
      className='absolute object-cover object-center px-1 bg-gray-300 rounded-lg cursor-pointer top-3 right-3 z-1'
      width='30px'
      isSelected={heart}
      onClick={() => {
        changeHeartBook(book, !heart)
      }}
    />
  )
}
