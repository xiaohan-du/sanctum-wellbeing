'use client'

import styles from './contactRow.module.scss';
import Image from 'next/image';
import call from '../static/images/call.svg';
import email from '../static/images/email.svg';
import home from '../static/images/home.svg';
import { redirectTo } from '../functions/redirectTo';

export const ContactRow = () => {
  return (
    <div className={`${styles.container} max-w-6xl xl:max-w-lg lg:max-w-md sm:max-w-xs font-sans flex xl:flex-col items-start w-screen justify-center bg-gray-50`}>
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
      <button className={`${styles.element} text-base p-2 xl:p-1 m-2 xl:m-0`}
          onClick={() => redirectTo('https://www.google.com/maps/place/Sanctum+Wellbeing/@51.492213,-3.205645,17z/data=!3m1!4b1!4m6!3m5!1s0x486e1bd061c1aea3:0x37d7f4e7ec5b7a50!8m2!3d51.4922097!4d-3.2030647!16s%2Fg%2F11szbq1_1v?authuser=0&entry=ttu', false)}
        >
          <Image src={home} alt="icons" className='h-12 lg:h-10 sm:h-8 w-auto mr-1' />
          <span className='mr-1 text-xl lg:text-base sm:text-sm'>88 Fields Park Rd, Pontcanna, CF11 9HX</span>
        </button>
    </div>
  )
}
