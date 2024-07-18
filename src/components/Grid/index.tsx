import { ReactNode } from 'react'

interface GridProps {
  children: ReactNode
}

export const Grid = ({ children }: GridProps) => {
  return (
    <section className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5'>
      {children}
    </section>
  )
}
