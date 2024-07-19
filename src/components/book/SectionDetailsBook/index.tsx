import { IBookItem } from '@/interfaces'
import { FavoriteList } from '../CardBook/FavoriteList'

interface SectionProps {
  book: IBookItem
}
export const SectionDetailsBook = ({ book }: SectionProps) => {
  return (
    <>
      <section className='overflow-hidden text-gray-700 bg-white rounded-3xl dark:text-gray-300 dark:bg-gray-900 shadow-3xl'>
        <div className='container px-5 py-20 mx-auto'>
          <div className='flex flex-wrap gap-4 mx-auto lg:w-4/5 md:gap-10'>
            <div className='md:flex-[0_1_40%]'>
              <img
                alt={book.title}
                className='object-center w-full h-auto border border-gray-200 rounded-3xl'
                src={book.cover}
              />
            </div>
            <div className='flex-1 w-full mt-6 lg:py-6 lg:mt-0'>
              <h3 className='text-sm tracking-widest text-gray-500 dark:text-gray-400 title-font'>
                {book.genre}
              </h3>
              <h2 className='mb-4 text-3xl font-medium text-gray-900 dark:text-white title-font'>
                {book.title}
              </h2>
              <p className='leading-relaxed'>{book.synopsis}</p>
              <div className='grid pt-4 mt-4 border-t-2 border-gray-200 md:grid-cols-2'>
                <p className='ml-2 text-sm font-medium text-gray-600 dark:text-gray-300'>
                  <strong className='block mb-2 text-base'>Autor:</strong>
                  {book.author.name}
                </p>
                <p className='ml-2 text-sm font-medium text-gray-600 dark:text-gray-300'>
                  <strong className='block mb-2 text-base'>
                    Fecha de publicación:
                  </strong>
                  {book.year}
                </p>
                {book.author.otherBooks.length > 0 && (
                  <div className='mt-4'>
                    <h5 className='mb-2 text-base font-semibold'>
                      Otros autores
                    </h5>
                    <ul className='pl-4 text-sm font-medium text-gray-600 list-disc dark:text-gray-300'>
                      {book.author.otherBooks.map(book => (
                        <li key={book}>
                          <span>{book}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <FavoriteList className='mt-4' showLabel book={book} width='45' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
