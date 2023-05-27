export const Footer = () => {
  return (
    <div className='w-full flex justify-center items-end h-12 mt-4 mb-4'>
      <span>Website built by&nbsp;</span>

      <a
        href="https://xiaohan-du.com"
        target="_blank"
        rel="noopener noreferrer"
        className='underline'
      >
        Xiaohan Du
      </a>
      &nbsp;using&nbsp;
      <a
        href="https://nextjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        className='underline'
      >
        Next TS
      </a>
      &nbsp;and&nbsp;
      <a
        href="https://tailwindcss.com/"
        target="_blank"
        rel="noopener noreferrer"
        className='underline'
      >
        Tailwind CSS
      </a>
      ,&nbsp;icons by&nbsp;
      <a
        href="https://icons8.com/"
        target="_blank"
        rel="noopener noreferrer"
        className='underline'
      >
        Icons8
      </a>
    </div>
  )
}
