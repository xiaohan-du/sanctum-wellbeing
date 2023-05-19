import styles from './mediaRow.module.scss';
import Image from 'next/image';
import logo from '../static/images/logo.jpeg';

interface IMediaRow {
  mediaRowData: Array<{
    url: string;
    title: string;
    content: string;
  }>;
}

export const MediaRow = () => {
  return (
    <div className=''>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles.element} ${styles.left}`}>
            Instagram
          </div>
          <div className={`${styles.element} ${styles.right}`}>
            Linkedin
          </div>
        </div>
        <div className={`${styles.elementMid} ${styles.center}`}>
          Let&#39;s connect!
        </div>
        <div className={styles.row}>
          <div className={`${styles.element} ${styles.left}`}>
            Facebook
          </div>
          <div className={`${styles.element} ${styles.right}`}>
            Twitter
          </div>
        </div>
      </div>
    </div>
  )
}
