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
    window.open(url, '_blank');
  };

  return (
    <div className={`${styles.container} font-sans flex flex-row items-center`}>
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
