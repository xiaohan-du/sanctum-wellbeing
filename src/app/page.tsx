import styles from './page.module.scss';
import { Navbar } from './components/navbar';
import { Banner } from './components/banner';
import { IgGrid } from './components/igGrid';
import { igUrls } from './static/data/igUrls';
import { CardRow } from './components/cardRow';
import { MediaRow } from './components/mediaRow';
import { cardRowData } from './static/data/cardRowData';

export default function Home() {
  return (
    <>
      <main className={`${styles.main} max-w-screen-xl font-serif font-thin tracking-normal`}>
        <Navbar />

        <div className={`${styles.center} tracking-widest`}>
          SANCTUM WELLBEING
        </div>
        <div className='mb-16'>
          <Banner
            title="The Business"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          />
        </div>
        <div className='-mt-28 mb-16 z-10'>
          <MediaRow />
        </div>


        <div className='mb-16'>
          <Banner
            title="About Me"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
          />
        </div>
        <div className='-mt-28 mb-16 z-10'>
          <CardRow cardRowData={cardRowData} />
        </div>

        <IgGrid title={'See what my customer says...'} urls={igUrls} />
        <div className='w-full flex justify-center items-end h-12'>
          <a
            href="https://xiaohan-du.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website built by Xiaohan Du Using Next TS and Tailwind CSS
          </a>
        </div>
      </main>
    </>
  )
}
