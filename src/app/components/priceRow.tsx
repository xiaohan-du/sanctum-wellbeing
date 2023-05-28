'use client'

import styles from './priceRow.module.scss';
import clock from '../static/images/clock.svg';
import Image from 'next/image';
import call from '../static/images/call.svg';
import email from '../static/images/email.svg';
import { redirectTo } from '../functions/redirectTo';

interface IPriceRow {
  priceRowData: Array<{
    title: string;
    time: string;
    price: string;
  }>;
}

export const PriceRow = ({ priceRowData }: IPriceRow) => {

  return (
    <div className={`${styles.container} font-sans flex flex-row md:flex-col items-center`}>
      <div className='flex flex-row sm:grid sm:grid-cols-2'>
        {
          priceRowData.map(({ title, time, price }, i) => (
            <div key={i} className='p-8 2xl:p-4 xl:p-2 md:p-1 flex flex-col items-center md:justify-between'>
              <div className='m-1 text-lg 2xl:text-base xl:text-sm xl:max-w-price-title font-normal'>{title}</div>
              <div className='flex flex-col items-center'>
                <div className='flex flex-row m-1'>
                  <Image src={clock} alt="Logo" className='h-6 xl:h-5 w-auto mr-1' />
                  <div className='xl:text-sm'>{time}</div>
                </div>
                <div className='text-3xl 2xl:text-2xl xl:text-base m-1 font-normal'>{price}</div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
