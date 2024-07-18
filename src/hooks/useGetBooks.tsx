import { useEffect, useState } from 'react'
import { getBooks } from '../services/api'
import { IBooks } from '../interfaces'

export const useGetBooks = () => {
  const [books, setBooks] = useState<IBooks[]>()
  const [error, setError] = useState<Error>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchBooks = async () => {
    try {
      setIsLoading(true)
      const data = await getBooks()
      setBooks(data.library)
    } catch (error) {
      if (error instanceof Error) {
        setError(error)
      } else {
        setError(new Error(`${error}`))
      }
      console.error('Error get data books:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  return { books, isLoading, error }
}
