import { IBookItem, IBooks } from '@/interfaces'
import { getBooks } from '../services/api'
import { useQuery } from '@tanstack/react-query'

export const useGetBooks = () => {
  const fetchBooks = async (): Promise<IBooks[]> => {
    try {
      const data = await getBooks()
      return data.library
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Fetch error get data books: ${error.message}`)
      }
      console.error('Error get data books:', error)
      throw new Error('Failed to fetch data books')
    }
  }
  const { error, data, isLoading } = useQuery<IBooks[]>({
    queryKey: ['getBookData'],
    queryFn: fetchBooks,
  })

  const getBooksOther = (books: IBookItem[]) => {
    const booksOther = data?.filter(
      book => !books.some(item => item.ISBN === book.book.ISBN),
    )
    return booksOther ?? []
  }
  const getBook = (ISBN: string) => {
    const book = data?.find(({ book }) => book.ISBN === ISBN)
    return book
  }

  return { books: data, isLoading, error, getBooksOther, getBook }
}
