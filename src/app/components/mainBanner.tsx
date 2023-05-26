import styles from './mainBanner.module.scss';
import logo from '../static/images/logo.svg';
import Image from 'next/image';

export const MainBanner = () => {
  return (
    <nav className={`w-screen ${styles.mainBanner}`}>
      <div className={`${styles.main} flex flex-row justify-center items-center m-auto`}>
        <div className='pt-12 pb-4 -ml-8'>
          <Image src={logo} alt="Logo" className='h-64 w-auto' />
        </div>
        <div className={`tracking-widest ${styles.brand}`}>
          SANCTUM WELLBEING
        </div>
      </div>
    </nav>
  )
}
