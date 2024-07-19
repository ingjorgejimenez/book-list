import { ReactNode } from 'react'
import { Footer, Sidebar, TopMenu } from '../ui'

export interface LayoutProps {
  children?: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <TopMenu />
      <Sidebar />
      <main className='flex-1 px-8 pt-5 pb-4 md:pb-8 md:pt-10'>
        <div className='max-w-screen-xl mx-auto'>{children}</div>
      </main>
      <Footer />
    </>
  )
}
