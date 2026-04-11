export const Footer = () => {
  return (
    <div className='w-full flex sm:flex-col justify-center items-end sm:items-center h-12 mt-4 mb-8 md:text-sm sm:text-xs'>
      <div>
        <span>Website built by&nbsp;</span>
        <a
          href="https://xiaohan-du.com"
          target="_blank"
          rel="noopener noreferrer"
          className='underline'
        >
          Xiaohan Du
        </a>
      </div>
      <div>
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
          Tailwind CSS,
        </a>
      </div>
      <div>
        &nbsp;icons by&nbsp;
        <a
          href="https://icons8.com/"
          target="_blank"
          rel="noopener noreferrer"
          className='underline'
        >
          Icons8
        </a>
      </div>
    </div>
  )
}
