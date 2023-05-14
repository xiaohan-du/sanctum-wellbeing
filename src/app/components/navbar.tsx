import styles from '../page.module.scss'
export const Navbar = () => {
  return (
    <nav className="bg-white-800 w-full">
      <div className="flex flex-col justify-between items-center">
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
              LOGO
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
