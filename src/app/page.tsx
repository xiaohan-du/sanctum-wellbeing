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
import massage from './static/images/massage.png';
import lady from './static/images/lady.png';
import { Footer } from './components/footer';
import { OpeningHours } from './components/openingHours';
import { Ad } from './components/ad';
import { adData } from './static/data/adData';
import { giftVoucherData } from './static/data/giftVoucherData';
import { PriceCardBox } from './components/priceCardBox';
import { priceCardData } from './static/data/priceCardData'
import { AboutPromoBanner } from './components/aboutPromoBanner';
import { LymphaticPromoBanner } from './components/lymphaticPromoBanner';
import { ReflexologyPromoBanner } from './components/reflexologyPromoBanner';
import { CorporatePromoBanner } from './components/corporatePromoBanner';
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

        <div className='mb-16'>
          <Banner
            title="Gift Vouchers"
            bannerHeight='h-auto'
            negativeTitleMargin='-mt-4 xl:-mt-8'
            imgUrl={massage}
            content={[
              'Looking for a thoughtful gift that truly makes a difference?',
              'Sanctum Wellbeing gift vouchers are perfect for anyone who could benefit from time to relax, unwind, and feel their best.',
              'Available for all treatments, including massage, reflexology, and lymphatic drainage, vouchers can be tailored to suit your needs.',
              'Whether it’s for a birthday, special occasion, or simply to show someone you care, a treatment experience is a gift they’ll genuinely appreciate.',
              'Purchase a gift voucher today or get in touch for more information.',
            ]}
          />
          <Ad adData={giftVoucherData}/>
        </div>

        <div className='mb-16'>
          <Banner
            title="Health Cash Plans"
            subtitle=' - Do you have a Health Shield , Simply Health, Medicash or similar health cash plan?'
            imgUrl={lady}
            content={[
              "Depending or your policy and level of cover, you could be reimbursed the cost of treatments. Do check your policy or contact your provider first. Please contact me if you need further information.",
            ]}
          />
        </div>

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
