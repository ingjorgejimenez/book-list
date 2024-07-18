import { CardBook } from '@/components/book/CardBook'
import { Grid } from '@/components/Grid'
import { useGetBooks } from '@/hooks/useGetBooks'

const Home = () => {
  const { books } = useGetBooks()
  return (
    <Grid>
      {books?.map(({ book }) => (
        <CardBook key={book.ISBN} book={book} />
      ))}
    </Grid>
  )
}

export default Home
