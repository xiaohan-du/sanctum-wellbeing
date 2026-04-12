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
import hand from './static/images/hand.png';
import back from './static/images/back.png';
import massage from './static/images/massage.png';
import lady from './static/images/lady.png';
import { Footer } from './components/footer';
import { OpeningHours } from './components/openingHours';
import { Ad } from './components/ad';
import { adData } from './static/data/adData';
import { giftVoucherData } from './static/data/giftVoucherData';
import { PriceCardBox } from './components/priceCardBox';
import { priceCardData } from './static/data/priceCardData'
import { LymphaticPromoBanner } from './components/lymphaticPromoBanner';
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
        <div className='mb-16'>
          <Banner
            title="About Sanctum Wellbeing"
            bannerHeight='h-auto min-h-[32rem] md:min-h-[30rem] sm:min-h-[72rem]'
            negativeTitleMargin='-mt-4 sm:-mt-10'
            imgUrl={hand}
            content={[
              'Sanctum Wellbeing was created as a calm, private space in Cardiff where you can truly switch off, reset, and feel looked after.',
              'I’m Louise, a qualified massage therapist and reflexologist, specialising in treatments that support relaxation, recovery, and overall wellbeing. My approach is personalised—no two treatments are the same—because your body and what you need will change from one visit to the next.',
              'Whether you’re dealing with stress, tension, hormonal changes, or simply need time to unwind, treatments are designed to help you feel lighter, more balanced, and more comfortable in your body.',
              'I offer a range of therapies including massage, reflexology, and lymphatic drainage, combining techniques where needed to give you the most effective results.',
              'Sanctum Wellbeing is based in Pontcanna Cardiff, offering a peaceful, one-to-one environment where your wellbeing is the focus.',
            ]}
          />
        </div>
        <div className='-mt-24 lg:-mt-20 sm:-mt-32 mb-16 z-10'>
          <MediaRow mediaRowData={mediaRowData} />
        </div>

        <CardRow cardRowData={cardRowData} />

        <LymphaticPromoBanner />

        <div className='mb-16'>
          <Banner
            title="Events - Corporate and Social"
            imgUrl={back}
            content={[
              "Are you organising an event or would like to arrange a bespoke wellbeing day for friends/family or team building event for your workforce? Can you see the signs of stress in the workplace and would like to help? Would you like to help optimise employee’s wellbeing?",
              '"Sanctum Wellbeing in the Workplace Days" are onsite visits offering complementary therapies that can be arranged to suit your business requirements. ',
              "If you would like further information on Sanctum Wellbeing in the Workplace Days please do not hesitate to get in touch and we can discuss the day in further detail and your requirements. Contact Louise on 07852 135375 or info@sanctumwellbeing.co.uk."
            ]}
          />
        </div>

        

        <div className='mb-16'>
          <Banner
            title="Treatments and Prices"
            negativeTitleMargin='-mt-224 md:-mt-304 sm:-mt-480'
            bannerHeight='h-248 md:h-328 sm:h-504'
            content={[]}
          />
        </div>
        <div className='-mt-232 md:-mt-312 sm:-mt-488 mb-16 z-10'>
          <PriceCardBox priceCardData={priceCardData}/>
        </div>

        <div className='mb-16'>
          <Banner
            title="Gift Vouchers"
            subtitle=' - Wondering what to get friends and loved ones for all those special occasions throughout the year? Then treat them to a perfect treatment!'
            bannerHeight='h-52 xl:h-56 md:h-96 sm:h-152'
            negativeTitleMargin='-mt-4 xl:-mt-8'
            imgUrl={massage}
            content={[]}
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
