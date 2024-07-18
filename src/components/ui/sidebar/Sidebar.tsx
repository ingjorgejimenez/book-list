import { useUIStore } from '@/store'
import {
  IoCloseOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoTicketOutline,
} from 'react-icons/io5'

export const Sidebar = () => {
  const { closeSideMenu, isSideMenuOpen } = useUIStore()
  return (
    <div>
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
        className={`fixed max-w-full p-5 right-0 top-0 w-[500px] h-screen bg-white dark:bg-body z-20 shadow-2xl transform transition-all duration-300 ${
          !isSideMenuOpen && 'translate-x-full'
        }`}
      >
        <IoCloseOutline
          size={50}
          className='absolute cursor-pointer top-5 right-5'
          onClick={closeSideMenu}
        />

        {/* Input */}
        <div className='relative mt-14'>
          <IoSearchOutline size={20} className='absolute top-2 left-2' />
          <input
            type='text'
            placeholder='Buscar'
            className='w-full py-1 pl-10 pr-10 text-xl border-b-2 border-gray-200 rounded bg-gray-50 focus:outline-none focus:border-blue-500'
          />
        </div>

        <a
          href='/profile'
          onClick={closeSideMenu}
          className='flex items-center p-2 mt-10 transition-all rounded hover:bg-primary'
        >
          <IoPersonOutline size={30} />
          <span className='ml-3 text-xl'>Libros</span>
        </a>
        <a
          href='/'
          className='flex items-center p-2 mt-10 transition-all rounded hover:bg-primary'
        >
          <IoTicketOutline size={30} />
          <span className='ml-3 text-xl'>Favoritos</span>
        </a>

        {/* Line Separator */}
        <div className='w-full h-px my-10 bg-gray-200' />
      </nav>
    </div>
  )
}
