import styles from './page.module.scss';
import { MainBanner } from './components/mainBanner';
import { Banner } from './components/banner';
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
import { PriceCardBox } from './components/priceCardBox';
import { priceCardData } from './static/data/priceCardData'
import { AboutPromoBanner } from './components/aboutPromoBanner';
import { LymphaticPromoBanner } from './components/lymphaticPromoBanner';
import { ReflexologyPromoBanner } from './components/reflexologyPromoBanner';
import { CorporatePromoBanner } from './components/corporatePromoBanner';
import { GiftVoucherPromoBanner } from './components/giftVoucherPromoBanner';
import { HealthCashPlansPromoBanner } from './components/healthCashPlansPromoBanner';
import { BackToTop } from './components/backToTop';

export default function Home() {
  return (
    <>
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

        

        <div className='mb-16'>
          <Banner
            title="Treatments and Prices"
            note="Female only"
            negativeTitleMargin='-mt-248 md:-mt-328 sm:-mt-552'
            bannerHeight='h-264 md:h-344 sm:h-568'
            content={[]}
          />
        </div>
        <div className='-mt-256 md:-mt-336 sm:-mt-560 mb-16 z-10'>
          <PriceCardBox priceCardData={priceCardData}/>
        </div>

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
