'use client'

import styles from './contactRow.module.scss';
import Image from 'next/image';
import call from '../static/images/call.svg';
import email from '../static/images/email.svg';
import { redirectTo } from '../functions/redirectTo';

export const ContactRow = () => {
  return (
    <div className={`${styles.container} font-sans flex flex-row items-center w-screen justify-center bg-gray-50`}>
      <div className='flex flex-row items-center max-w-screen-xl'>
        <button className={`${styles.element}`}
          onClick={() => redirectTo('tel:+447852135375', false)}
        >
          <Image src={call} alt="icons" className='h-12 w-auto mr-1' />
          <span className='mr-1 text-xl'>07852 135375</span>
        </button>
        <button className={`${styles.element}`}
          onClick={() => redirectTo('mailto:info@sanctumwellbeing.co.uk', false)}
        >
          <Image src={email} alt="icons" className='h-12 w-auto mr-1' />
          <span className='mr-1 text-xl'>info@sanctumwellbeing.co.uk</span>
        </button>
      </div>
    </div>
  )
}
