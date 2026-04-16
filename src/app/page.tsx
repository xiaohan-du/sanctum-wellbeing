import styles from './page.module.scss';
import { MainBanner } from './components/mainBanner';
import { CardRow } from './components/cardRow';
import { MediaRow } from './components/mediaRow';
import { cardRowData } from './static/data/cardRowData';
import { ReviewBanner } from './components/reviewBanner';
import { reviewData } from './static/data/reviewData';
import { mediaRowData } from './static/data/mediaRowData';
import { ContactRow } from './components/contactRow';
import { Footer } from './components/footer';
import { OpeningHours } from './components/openingHours';
import { Ad } from './components/ad';
import { adData } from './static/data/adData';
import { AboutPromoBanner } from './components/aboutPromoBanner';
import { LymphaticPromoBanner } from './components/lymphaticPromoBanner';
import { ReflexologyPromoBanner } from './components/reflexologyPromoBanner';
import { CorporatePromoBanner } from './components/corporatePromoBanner';
import { GiftVoucherPromoBanner } from './components/giftVoucherPromoBanner';
import { HealthCashPlansPromoBanner } from './components/healthCashPlansPromoBanner';
import { BackToTop } from './components/backToTop';
import { HomeScrollSession } from './components/homeScrollSession';
import { PricesPromoBanner } from './components/pricesPromoBanner';

export default function Home() {
  return (
    <>
      <HomeScrollSession />
      <main
        id="top"
        className={`${styles.main} px-8 max-w-screen-xl font-serif font-thin tracking-normal sm:px-4`}
      >
        <MainBanner />
        <ContactRow />
        <Ad adData={adData}/>
        <AboutPromoBanner />
        <div className='-mt-24 lg:-mt-20 sm:-mt-8 mb-8 z-10'>
          <MediaRow mediaRowData={mediaRowData} />
        </div>

        <CardRow cardRowData={cardRowData} />

        <LymphaticPromoBanner />

        <ReflexologyPromoBanner />

        <CorporatePromoBanner />

        

        <PricesPromoBanner />

        <GiftVoucherPromoBanner />

        <HealthCashPlansPromoBanner />

        <div className='mb-4'>
          <ReviewBanner reviewData={reviewData} />
        </div>
        <OpeningHours />
        <BackToTop />
        <Footer />
      </main>
    </>
  )
}
