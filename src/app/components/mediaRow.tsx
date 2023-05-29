'use client'

import styles from './mediaRow.module.scss';
import Image from 'next/image';
import { redirectTo } from '../functions/redirectTo';

interface IMediaRow {
  mediaRowData: Array<{
    url: string;
    title: string;
    imgUrl: any;
  }>;
}

export const MediaRow = ({ mediaRowData }: IMediaRow) => {

  return (
    <div className={`${styles.container} font-sans flex flex-row sm:flex-col sm:items-start items-center pl-4 pr-4`}>
      {
        mediaRowData.map(({ url, title, imgUrl }, i) => (
          <button key={i} className={`${styles.element} p-2 lg:p-1`}
            onClick={() => redirectTo(url, false)}
          >
            <Image src={imgUrl} alt="icons" className='h-12 lg:h-10 md:h-6 sm:h-10 w-auto mr-1' />
            <span className='mr-1 xl:text-lg lg:text-base md:text-sm sm:text-lg sm:tracking-widest'>{title}</span>
          </button>
        ))
      }
    </div>
  )
}
