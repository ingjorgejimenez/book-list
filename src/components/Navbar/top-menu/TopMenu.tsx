'use client'

import { useUIStore } from '../../../store/ui/ui-store'
import { useEffect, useState } from 'react'
import { IoBookOutline, IoMenuOutline, IoSearchOutline } from 'react-icons/io5'
import { useBookStore } from '../../../store/book/bookStore'

export const TopMenu = () => {
  const { openSideMenu } = useUIStore()
  const totalItems = useBookStore(state => state.getTotalItems())
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <nav className='flex items-center justify-between w-full max-w-screen-xl px-5 mx-auto'>
      {/* Logo */}
      <div className='flex items-center'>
        <a href='/'>
          <span className={`antialiased font-bold`}>Books</span>
          <span>| List</span>
        </a>
      </div>

      {/* options  menu*/}
      <div className='hidden sm:block'>
        <a
          className='p-2 m-2 transition-all rounded-md hover:bg-gray-100'
          href='/gender/men'
        >
          Home
        </a>
        <a
          className='p-2 m-2 transition-all rounded-md hover:bg-gray-100'
          href='/gender/women'
        >
          Listado
        </a>
        <a
          className='p-2 m-2 transition-all rounded-md hover:bg-gray-100'
          href='/gender/kid'
        >
          Favoritos
        </a>
      </div>

      {/* search, Cart Menu */}
      <div className='flex items-center gap-2'>
        <a href={'/search'}>
          <IoSearchOutline className='w-5 h-5' />
        </a>
        <a href={totalItems === 0 ? '' : '/cart'}>
          <div className='relative'>
            {loaded && totalItems != 0 && loaded && (
              <span className='absolute px-1 text-xs font-bold text-white bg-blue-700 rounded-full fade-in -top-2 -right-2'>
                {totalItems}
              </span>
            )}
            <IoBookOutline className='w-5 h-5' />
          </div>
        </a>
        <button
          className='mr-2 transition-all rounded-md hover:cursor-pointer'
          onClick={openSideMenu}
        >
          <IoMenuOutline className='w-7 h-7' />
        </button>
      </div>
    </nav>
  )
}
