import { CardBook } from '@/components/book/CardBook'
import { FilterBooks } from '@/components/FilterBooks'
import { Grid } from '@/components/Grid'
import { useFilterBooks } from '@/hooks/useFilterBooks'

const Home = () => {
  const { filters, searchBook, setAuthor, setGenre, setTitle } =
    useFilterBooks()
  return (
    <>
      <FilterBooks
        setAuthor={setAuthor}
        setTitle={setTitle}
        setGenre={setGenre}
        {...filters}
      />
      <Grid>
        {searchBook?.map(({ book }) => (
          <CardBook key={book.ISBN} book={book} />
        ))}
      </Grid>
    </>
  )
}

export default Home
