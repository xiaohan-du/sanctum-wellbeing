'use client'

import styles from './mediaRow.module.scss';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';

interface IMediaRow {
  mediaRowData: Array<{
    url: string;
    title: string;
    content: string;
  }>;
}

export const MediaRow = () => {
  const redirectTo = (url: string): void => {
    window.location.href = url;
  };

  return (
    <div className='font-sans'>
      <div className={styles.container}>
        <div className={styles.row}>
          <button className={`${styles.element} ${styles.left} ${styles.instagram} rounded-tl-lg`}
            onClick={() => redirectTo('https://www.instagram.com/sanctumwellbeing/')}
          >
            <AiOutlineInstagram size={32} className='ml-2' />
            <span className='ml-1'>Instagram</span>
          </button>
          <button className={`${styles.element} ${styles.right} ${styles.linkedin} rounded-tr-lg`}
            onClick={() => redirectTo('https://www.linkedin.com/in/sanctum-wellbeing-286ab5252/')}
          >
            <span className='mr-1'>Linkedin</span>
            <AiOutlineLinkedin size={32} className='mr-2' />
          </button>
        </div>
        <div className={`${styles.elementMid} ${styles.center} rounded-lg`}>
          Let&#39;s connect!
        </div>
        <div className={styles.row}>
          <button className={`${styles.element} ${styles.left} ${styles.facebook} rounded-bl-lg`}
            onClick={() => redirectTo('https://www.facebook.com/sanctumwellbeing')}
          >
            <AiOutlineFacebook size={32} className='ml-2' />
            <span className='ml-1'>Facebook</span>
          </button>
          <button className={`${styles.element} ${styles.right} ${styles.twitter} rounded-br-lg`}>
            <span className='mr-1'>Twitter</span>
            <AiOutlineTwitter size={32} className='mr-2' />
          </button>
        </div>
      </div>
    </div>
  )
}
