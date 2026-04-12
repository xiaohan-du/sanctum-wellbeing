'use client'

import styles from './mediaRow.module.scss';
import Image from 'next/image';

interface IMediaRow {
  mediaRowData: Array<{
    url: string;
    title: string;
    imgUrl: any;
  }>;
}

export const MediaRow = ({ mediaRowData }: IMediaRow) => {

  return (
    <div className={`${styles.container} font-sans flex flex-row sm:items-start items-center`}>
      {
        mediaRowData.map(({ url, title, imgUrl }, i) => (
          <a
            key={i}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} (opens in new tab)`}
            className={`${styles.element} p-2 lg:p-1 w-full no-underline text-inherit cursor-pointer`}
          >
            <Image src={imgUrl} alt="" className='h-12 lg:h-10 md:h-6 sm:h-10 w-auto mr-1' aria-hidden />
            <span aria-hidden className='mr-1 xl:text-lg lg:text-base md:text-sm sm:text-lg sm:tracking-widest sm:hidden'>
              {title}
            </span>
          </a>
        ))
      }
    </div>
  )
}
