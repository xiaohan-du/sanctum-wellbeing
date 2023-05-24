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
  const redirectTo = (url: string): void => {
    window.location.href = url;
  };

  return (
    <div className={`${styles.container} font-sans flex flex-row justify-between items-center`}>

      <div className={`${styles.element}`}>
        Let&#39;s connect!
      </div>
      {
        mediaRowData.map(({ url, title, imgUrl }, i) => (
          <button key={i} className={`${styles.element}`}
            onClick={() => redirectTo(url)}
          >
            <Image src={imgUrl} alt="instagram" className='h-12 w-auto mr-1' />
            <span className='mr-1'>{title}</span>
          </button>
        ))
      }
    </div>
  )
}
