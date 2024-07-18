import { CardBook } from './components/book/CardBook'
import { Grid } from './components/Grid'
import { Layout } from './components/layouts/Layout'
import { useGetBooks } from './hooks/useGetBooks'

function App() {
  const { books } = useGetBooks()
  console.log(books)
  return (
    <Layout>
      <Grid>
        {books?.map(book => (
          <>
            <CardBook {...book.book} />
          </>
        ))}
      </Grid>
    </Layout>
  )
}
export default App
