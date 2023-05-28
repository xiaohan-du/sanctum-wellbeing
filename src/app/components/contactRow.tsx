'use client'

import styles from './contactRow.module.scss';
import Image from 'next/image';
import call from '../static/images/call.svg';
import email from '../static/images/email.svg';
import { redirectTo } from '../functions/redirectTo';

export const ContactRow = () => {
  return (
    <div className={`${styles.container} font-sans flex flex-row items-center w-screen justify-center bg-gray-50`}>
      <div className='flex flex-row sm:flex-col sm:items-start items-center max-w-screen-xl'>
        <button className={`${styles.element} text-base p-2 xl:p-1 m-2 xl:m-0`}
          onClick={() => redirectTo('tel:+447852135375', false)}
        >
          <Image src={call} alt="icons" className='h-12 lg:h-10 sm:h-8 w-auto mr-1' />
          <span className='mr-1 text-xl lg:text-base sm:text-sm'>07852 135375</span>
        </button>
        <button className={`${styles.element} text-base p-2 xl:p-1 m-2 xl:m-0`}
          onClick={() => redirectTo('mailto:info@sanctumwellbeing.co.uk', false)}
        >
          <Image src={email} alt="icons" className='h-12 lg:h-10 sm:h-8 w-auto mr-1' />
          <span className='mr-1 text-xl lg:text-base sm:text-sm'>info@sanctumwellbeing.co.uk</span>
        </button>
      </div>
    </div>
  )
}
