import { IBookItem, IBooks } from '@/interfaces'
import { getBooks } from '../services/api'
import { useQuery } from '@tanstack/react-query'
import { getBookByISBN, getBooksOtherData } from '@/services/books'

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

  const getBooksOther = (books: IBookItem[]) => getBooksOtherData(books, data)
  const getBook = (ISBN?: string) => getBookByISBN(ISBN, data)
  return {
    books: data,
    isLoading,
    error,
    getBooksOther,
    getBook,
  }
}
