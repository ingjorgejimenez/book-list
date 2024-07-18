import { IBookItem } from '@/interfaces'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface State {
  bookList: IBookItem[]
  getTotalItems: () => number
  addBook: (book: IBookItem) => void
  removeBook: (book: IBookItem) => void
}

export const useBookStore = create<State>()(
  persist(
    (set, get) => ({
      bookList: [],
      // Methods
      getTotalItems: () => {
        const { bookList } = get()
        return bookList.reduce(acc => (acc += 1), 0)
      },

      addBook: (book: IBookItem) => {
        const { bookList } = get()
        set({ bookList: [...bookList, book] })
      },

      removeBook(book) {
        const { bookList } = get()
        const updateCardProducts = bookList.filter(
          item => item.ISBN !== book.ISBN,
        )
        set({
          bookList: updateCardProducts,
        })
      },
    }),
    {
      name: 'BookList',
    },
  ),
)
