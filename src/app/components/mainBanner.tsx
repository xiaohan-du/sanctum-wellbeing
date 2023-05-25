import styles from './mainBanner.module.scss';
import logo from '../static/images/logo.svg';
import Image from 'next/image';

export const MainBanner = () => {
  return (
    <nav className={`w-screen ${styles.mainBanner}`}>
      <div className={`${styles.main} flex flex-row justify-center items-center m-auto`}>
        <a
          href="https://sanctumwellbeing.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
          className='pt-12 pb-4 -ml-8'
        >
          <Image src={logo} alt="Logo" className='h-64 w-auto' />
        </a>
        <div className={`tracking-widest ${styles.brand}`}>
          SANCTUM WELLBEING
        </div>
      </div>
    </nav>
  )
}
