export const Footer = () => {
  return (
    <div className='flex justify-center py-10 text-xs'>
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
    </div>
  )
}
