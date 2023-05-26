'use client'

import styles from './voucherRow.module.scss';
import clock from '../static/images/clock.svg';
import Image from 'next/image';
import call from '../static/images/call.svg';
import email from '../static/images/email.svg';
import { redirectTo } from '../functions/redirectTo';

interface IVoucherRow {
  voucherRowData: Array<{
    title: string;
    time: string;
    price: string;
  }>;
}

export const VoucherRow = ({ voucherRowData }: IVoucherRow) => {

  return (
    <div className={`${styles.container} font-sans flex flex-row items-center`}>
      {
        voucherRowData.map(({ title, time, price }, i) => (
          <div key={i} className='p-8 flex flex-col items-center'>
            <div className='m-1 text-lg font-normal'>{title}</div>
            <div className='flex flex-row m-1'>
              <Image src={clock} alt="Logo" className='h-6 w-auto mr-1' />
              <div>{time}</div>
            </div>
            <div className='text-3xl m-1 font-normal'>{price}</div>
          </div>
        ))
      }
      <div className='flex flex-col h-full'>
        <button className={`${styles.element}`}
          onClick={() => redirectTo('tel:+447852135375', false)}
        >
          <Image src={call} alt="icons" className='h-12 w-auto mr-1' />
          <span className='mr-1'>Call</span>
        </button>
        <button className={`${styles.element}`}
          onClick={() => redirectTo('mailto:info@sanctumwellbeing.co.uk', false)}
        >
          <Image src={email} alt="icons" className='h-12 w-auto mr-1' />
          <span className='mr-1'>Email</span>
        </button>
      </div>
    </div>
  )
}
