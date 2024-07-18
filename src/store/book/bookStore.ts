import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface State {
  book: any[]
  getTotalItems: () => number
  addBook: (books: any) => void
  removeBook: (books: any) => void
}

export const useBookStore = create<State>()(
  persist(
    (set, get) => ({
      book: [],
      // Methods

      getTotalItems: () => {
        const { book } = get()
        return book.reduce((acc, _, index) => acc + index + 1, 0)
      },
      addBook: books => {
        set({ book: books })
      },

      removeBook(books) {
        const { book } = get()
        const updateCardProducts = book.filter(item => item.ISBN !== books.ISBN)
        set({
          book: updateCardProducts,
        })
      },
    }),
    {
      name: 'BookList',
    },
  ),
)
