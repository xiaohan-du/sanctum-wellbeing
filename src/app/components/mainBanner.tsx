import styles from './mainBanner.module.scss';
import logo from '../static/images/logo.svg';
import Image from 'next/image';

export const MainBanner = () => {
  return (
    <nav className={`w-screen ${styles.mainBanner}`}>
      <div className={`${styles.main} xl:h-56 lg:h-48 sm:h-36 flex flex-row justify-center items-center m-auto`}>
        <div className='pt-12 pb-4 -ml-8'>
          <Image src={logo} alt="Logo" className='h-64 xl:h-56 lg:h-36 md:h-32 w-auto' />
        </div>
        <div className='flex flex-row sm:flex-col justify-center items-center'>
          <div className='text-7xl 2xl:text-6xl xl:text-5xl xl:ml-8 lg:ml-0 lg:text-4xl md:text-2xl sm:font-semibold tracking-widest'>
            SANCTUM&nbsp;
          </div>
          <div className='text-7xl 2xl:text-6xl xl:text-5xl xl:ml-8 lg:ml-0 lg:text-4xl md:text-2xl sm:font-semibold tracking-widest'>
            WELLBEING
          </div>
        </div>
      </div>
    </nav>
  )
}
