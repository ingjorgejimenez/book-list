import { SectionDetailsBook } from '@/components/book/SectionDetailsBook'
import { useGetBooks } from '@/hooks/useGetBooks'
import { getSearchParams } from '@/utils/getRouter'

const DetailsBook = () => {
  const { getBook } = useGetBooks()
  const searchParams = getSearchParams().get('id') ?? undefined
  const book = getBook(searchParams)
  if (!book) return undefined
  return (
    <>
      <h1 className='mb-8'>{book.title}</h1>
      <SectionDetailsBook book={book} />
    </>
  )
}

export default DetailsBook
