import { CardBook } from '@/components/book/CardBook'
import { Grid } from '@/components/Grid'
import { useGetBooks } from '@/hooks/useGetBooks'
import { navigate } from '@/router/Link'
import { useBookStore } from '@/store'

const ListBook = () => {
  const { getBooksOther } = useGetBooks()
  const { bookList, getTotalItems } = useBookStore()
  const totalItems = getTotalItems()
  if (totalItems === 0) navigate('/')
  const booksOther = getBooksOther(bookList)
  return (
    <>
      <h1 className='relative mb-8'>
        Listado de Lectura{' '}
        <span className='px-2 py-1 text-base font-bold text-white rounded-full bg-primary fade-in'>
          {totalItems}
        </span>
      </h1>
      <Grid>
        {bookList?.map(book => (
          <CardBook key={book.ISBN} book={book} />
        ))}
      </Grid>
      <h2 className='mt-8'>Otros Libros</h2>
      <Grid>
        {booksOther?.map(({ book }) => (
          <CardBook key={`otherBooks${book.ISBN}`} book={book} />
        ))}
      </Grid>
    </>
  )
}

export default ListBook
