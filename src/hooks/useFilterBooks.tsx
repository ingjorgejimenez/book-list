import { useCallback, useEffect, useState } from 'react'
import { useGetBooks } from './useGetBooks'
import { SearchFilter } from '@/interfaces/utils'
import { getFiltersData, searchBookData } from '@/services/books'
import { IBooks } from '@/interfaces'

export const useFilterBooks = () => {
  const [author, setAuthor] = useState<string>('')
  const [genre, setGenre] = useState<string>('')
  const [title, setTitle] = useState<string>()
  const [searchBook, setSearchBook] = useState<IBooks[]>()

  const { books } = useGetBooks()

  const searchFilter = useCallback(
    ({ author, genre, title }: SearchFilter) => {
      return searchBookData({
        author,
        genre,
        title,
        data: books,
      })
    },
    [books],
  )
  useEffect(() => {
    setSearchBook(books)
  }, [books])

  useEffect(() => {
    const data = searchFilter({ author, genre, title })
    setSearchBook(data)
  }, [author, genre, title, searchFilter])

  const filters = getFiltersData(books)
  return { filters, searchBook, searchFilter, setAuthor, setGenre, setTitle }
}
