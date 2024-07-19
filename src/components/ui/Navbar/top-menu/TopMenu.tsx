import Logo from '@/components/icons/Logo'
import { Link } from '@/router/Link'
import { useBookStore, useUIStore } from '@/store'
import { getCurrentPath } from '@/utils/getRouter'
import { IoBookOutline, IoMenuOutline } from 'react-icons/io5'

export const TopMenu = () => {
  const { openSideMenu } = useUIStore()
  const pathname = getCurrentPath()
  const totalItems = useBookStore(state => state.getTotalItems())

  return (
    <header className='sticky top-0 z-10 px-8 bg-white shadow-3xl dark:bg-body'>
      <nav className='flex items-center justify-between w-full max-w-screen-xl py-2 mx-auto'>
        {/* Logo */}
        <div className='flex items-center'>
          <Link href='/'>
            <Logo width='60' className='red dark:blue' />
          </Link>
        </div>

        {/* options  menu*/}
        <div className='hidden sm:block'>
          <Link
            className={`p-2 m-2 transition-all rounded-md hover:bg-primary ${
              pathname === '/' ? 'bg-primary' : ''
            }`}
            href='/'
          >
            Listado
          </Link>
          {totalItems > 0 && (
            <Link
              className={`p-2 m-2 transition-all rounded-md hover:bg-primary ${
                pathname === '/lista-de-lectura' ? 'bg-primary' : ''
              } `}
              href='/lista-de-lectura'
            >
              Lista de lectura
            </Link>
          )}
        </div>

        {/* search, Books Menu */}

        <div className='flex items-center gap-4'>
          {/* <Link href={'/search'}>
            <IoSearchOutline className='w-5 h-5' />
          </Link> */}
          <Link href={totalItems === 0 ? '' : '/lista-de-lectura'}>
            <div className='relative'>
              {totalItems != 0 && (
                <span className='absolute px-1 text-xs font-bold text-white rounded-full bg-primary fade-in -top-2 -right-2'>
                  {totalItems}
                </span>
              )}
              <IoBookOutline className='w-6 h-6' />
            </div>
          </Link>
          <button
            className='mr-2 transition-all rounded-md hover:cursor-pointer md:hidden'
            onClick={openSideMenu}
          >
            <IoMenuOutline className='w-8 h-8' />
          </button>
        </div>
      </nav>
    </header>
  )
}
