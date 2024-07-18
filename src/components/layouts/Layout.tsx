import { ReactNode } from 'react'
import { TopMenu } from '../Navbar'
import { Sidebar } from '../sidebar/Sidebar'

export interface LayoutProps {
  children?: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header className='py-5 shadow-3xl'>
        <TopMenu />
      </header>
      <Sidebar />
      <main className='pt-10'>
        <div className='max-w-screen-xl px-5 mx-auto'>{children}</div>
      </main>
    </>
  )
}
