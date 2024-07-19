export const Footer = () => {
  return (
    <footer className='flex justify-center py-10 text-xs border-t dark:border-t-gray-700'>
      <a href='/'>
        <span className={` antialiased font-bold`}>Books </span>
        <span>| List </span>
        <span>©{new Date().getFullYear()}</span>
      </a>
      <a
        href='https://www.jelou.ai'
        target='_blank'
        className='mx-3 font-medium'
        rel='noreferrer'
      >
        <span className='mr-4'>-</span>
        Jelou
      </a>
    </footer>
  )
}
