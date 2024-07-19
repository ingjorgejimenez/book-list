import { IFilters } from '@/interfaces/utils'
import { SelectBook } from '../SelectBook'
import { ChangeEvent, useState } from 'react'

interface FilterProps extends IFilters {
  setAuthor?: (option: string) => void
  setGenre?: (option: string) => void
  setTitle?: (option: string) => void
}
export const FilterBooks = ({
  author,
  genre,
  setAuthor,
  setGenre,
  setTitle,
}: FilterProps) => {
  const [search, setSearch] = useState<string>()

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setSearch(event.target.value)
    setTitle && setTitle(event.target.value)
  }

  return (
    <div className='flex flex-col items-end justify-center gap-12 px-4 py-8 mx-auto mt-5 mb-8 bg-white rounded md:mt-10 dark:bg-gray-900 md:flex-row md:flex-wrap bg-green'>
      <SelectBook label={'Autor'} options={author} stateChange={setAuthor} />
      <SelectBook label={'Genero'} options={genre} stateChange={setGenre} />
      <input
        type='text'
        placeholder='Buscar'
        onChange={handleChange}
        value={search}
        className='w-full py-1 pl-10 pr-10 text-base border-b-2 border-gray-200 rounded md:w-min h-9 dark:text-gray-600 bg-gray-50 focus:outline-none focus:border-blue-500'
      />
    </div>
  )
}
