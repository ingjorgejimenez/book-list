import { Link } from '@/router/Link'
import { useBookStore, useUIStore } from '@/store'
import { getCurrentPath } from '@/utils/getRouter'
import {
  IoBookOutline,
  IoCloseOutline,
  IoLibraryOutline,
} from 'react-icons/io5'

export const Sidebar = () => {
  const { closeSideMenu, isSideMenuOpen } = useUIStore()
  const pathname = getCurrentPath()
  const totalItems = useBookStore(state => state.getTotalItems())
  return (
    <div className='md:hidden'>
      {/* Background */}
      {isSideMenuOpen && (
        <div className='fixed top-0 left-0 z-10 w-screen h-screen bg-black opacity-30' />
      )}
      {/* Blur */}

      {isSideMenuOpen && (
        <div className='fixed top-0 left-0 z-10 w-screen h-screen fade-in backdrop-filter backdrop-blur-sm' />
      )}

      {/* SideMenu */}
      <nav
        className={`fixed max-w-full pt-12 p-5 right-0 top-0 w-[500px] h-screen bg-white dark:bg-body z-20 shadow-2xl transform transition-all duration-300 ${
          !isSideMenuOpen && 'translate-x-full'
        }`}
      >
        <IoCloseOutline
          size={50}
          className='absolute cursor-pointer top-5 right-5'
          onClick={closeSideMenu}
        />

        {/* Input */}

        {/* <div className='relative mt-14'>
          <IoSearchOutline size={20} className='absolute top-2 left-2' />
          <input
            type='text'
            placeholder='Buscar'
            className='w-full py-1 pl-10 pr-10 text-xl border-b-2 border-gray-200 rounded dark:text-gray-600 bg-gray-50 focus:outline-none focus:border-blue-500'
          />
        </div> */}

        <Link
          className={`flex  gap-2 items-center p-2 mt-10 transition-all rounded hover:bg-primary ${
            pathname === '/' ? 'bg-primary text-white' : ''
          }`}
          href='/'
          onClick={closeSideMenu}
        >
          <IoLibraryOutline size={30} />
          <span className='ml-3 text-xl'>Listado</span>
        </Link>
        {totalItems > 0 && (
          <Link
            className={`flex gap-2 items-center p-2 mt-10 transition-all rounded hover:bg-primary ${
              pathname === '/#/lista-de-lectura' ? 'bg-primary text-white' : ''
            } `}
            href='/#/lista-de-lectura'
            onClick={closeSideMenu}
          >
            <IoBookOutline size={30} />
            <span className='ml-3 text-xl'>Lista de lectura</span>
          </Link>
        )}

        {/* Line Separator */}
        <div className='w-full h-px my-10 bg-gray-200' />
      </nav>
    </div>
  )
}
