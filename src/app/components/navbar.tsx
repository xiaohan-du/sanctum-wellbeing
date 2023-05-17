import styles from './navbar.module.scss';
import logo from '../static/images/logo.jpeg';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <nav className={`bg-white-800 w-screen ${styles.navbar}`}>
      <div className="flex flex-col justify-between items-center max-w-screen-xl m-auto">
        <div className={styles.description}>
          <p>
            COMING SOON...
          </p>
          <div>
            <a
              href="https://sanctumwellbeing.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={logo} alt="Logo" className='h-32 w-auto'/>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
