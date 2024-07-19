import { IBookItem, IBooks } from '@/interfaces'
import { IFilters, SearchFilter } from '@/interfaces/utils'

export const getFiltersData = (books?: IBooks[]): IFilters => {
  if (!books || books.length === 0) return { genre: [], author: [] }
  const filters = books.reduce(
    (acc, { book }) => {
      if (!acc.genre.includes(book.genre)) {
        acc.genre.push(book.genre)
      }
      if (!acc.author.includes(book.author.name)) {
        acc.author.push(book.author.name)
      }
      return acc
    },
    { genre: [], author: [] } as IFilters,
  )
  return filters
}

export const getBookByISBN = (ISBN?: string, data?: IBooks[]): IBookItem => {
  if (!ISBN || !data) return {} as IBookItem
  const { book } = data.find(({ book }) => book.ISBN === ISBN)!
  return book
}

export const getBooksOtherData = (
  books: IBookItem[],
  data?: IBooks[],
): IBooks[] => {
  const booksOther = data?.filter(
    book => !books.some(item => item.ISBN === book.book.ISBN),
  )
  return booksOther ?? []
}

export const searchBookData = ({
  author,
  genre,
  title,
  data,
}: SearchFilter & { data?: IBooks[] }) => {
  if (!data) return []
  if (!author && !genre && !title) return data ?? []
  const filteredBooks = data.filter(({ book }) => {
    if (author && genre) {
      if (book.author.name === author && book.genre.includes(genre)) return true
    } else {
      if (author && book.author.name === author) return true
      if (genre && book.genre.includes(genre)) return true
      if (title && book.title.toLowerCase().includes(title.toLowerCase()))
        return true
    }
  })
  return filteredBooks
}
