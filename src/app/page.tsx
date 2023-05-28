import styles from './page.module.scss';
import { MainBanner } from './components/mainBanner';
import { Banner } from './components/banner';
import { CardRow } from './components/cardRow';
import { MediaRow } from './components/mediaRow';
import { cardRowData } from './static/data/cardRowData';
import { ReviewBanner } from './components/reviewBanner';
import { reviewData } from './static/data/reviewData';
import { mediaRowData } from './static/data/mediaRowData';
import { PriceRow } from './components/priceRow';
import { voucherRowData } from './static/data/voucherRowData';
import { priceRowData } from './static/data/priceRowData';
import { ContactRow } from './components/contactRow';
import head from './static/images/head.png';
import hand from './static/images/hand.png';
import back from './static/images/back.png';
import foot from './static/images/foot.png';
import massage from './static/images/massage.png';
import lady from './static/images/lady.png';
import { Footer } from './components/footer';

export default function Home() {
  return (
    <>
      <main className={`${styles.main} max-w-screen-xl font-serif font-thin tracking-normal`}>
        <MainBanner />
        <ContactRow />
        <div className='mb-16'>
          <Banner
            title="About Me"
            content={["I am Louise Davies, MAR, CRM5 DIP, CNHC. I’m fully insured and DBS checked, Level 5 Clinical Reflexologist and Indian Head Massage therapist based in Cardiff. I set up my practice Sanctum Wellbeing to help others take the time to relax, de-stress and alleviate tension and anxieties. As a Reflexologist Practitioner and practising other complementary therapies being able to give my clients a calm, stress free hour to themselves so they can re-set and focus on their own wellbeing and health is the most rewarding feeling for me. If you have any queries, please do not hesitate to contact me on 07852 135375."]}
            bannerHeight='h-80 md:h-112 sm:h-120'
            negativeTitleMargin='-mt-20 xl:-mt-16 lg:-mt-12 md:-mt-8'
            imgUrl={foot}
          />
        </div>
        <div className='-mt-36 xl:-mt-32 lg:-mt-28 md:-mt-24 mb-16 z-10'>
          <CardRow cardRowData={cardRowData} />
        </div>

        <div className='mb-16'>
          <Banner
            title="The Business"
            bannerHeight='h-80 2xl:h-96 lg:h-80 md:h-128 sm:h-136'
            negativeTitleMargin='-mt-4 sm:-mt-16'
            imgUrl={hand}
            content={["I run my practice from my lovely treatment room in Pontcanna, Cardiff.",
              "Mobile visits are available. Onsite workplace visits can be arranged to suit your business requirements.",
              "The treatment room has been created for the senses, for you to be indulged with wonderfully scented oils, warm fluffy blankets which are heated on cold days, soft music playing, and comfortable relaxing chairs and beds. Herbal teas and water are provided, and complimentary face masks for during your treatment. Hot water bottles are also to hand should you require one. ",
              "Reflexology balms are created locally by The Apothecary, Canton, they are plant based and infused with wonderfully scented oils. "]}
          />
        </div>
        <div className='-mt-24 lg:-mt-20 sm:-mt-28 mb-16 z-10'>
          <MediaRow mediaRowData={mediaRowData} />
        </div>

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
            negativeTitleMargin='-mt-16 sm:-mt-32'
            imgUrl={head}
            bannerHeight='h-96 md:h-136 sm:h-152'
            content={[
              "Indian Head Massage includes the back, shoulders, neck, arms, face and head. This treatment can be done clothed or you may wish to remove your upper garments to allow me to apply oil to the skin and apply firmer pressure to the muscles depending upon how tense you are, and what you need. Wraps are provided for you.",
              "The Ultimate is a combination of Indian Head Massage, Hand and Feet Reflexology. This is the ultimate super relaxing and stress busting treatment.",
              "Mobile treatments in Cardiff are available where I come and set up in the comfort of your own home. Outside Cardiff a fee to cover travel cost will be incurred. "
            ]}
          />
        </div>
        <div className='-mt-36 2xl:-mt-32 sm:-mt-44 mb-16 z-10'>
          <PriceRow priceRowData={priceRowData} />
        </div>

        <div className='mb-16'>
          <Banner
            title="Gift Vouchers"
            bannerHeight='h-52 xl:h-56 md:h-96'
            negativeTitleMargin='-mt-4 xl:-mt-8'
            imgUrl={massage}
            content={[
              "Wondering what to get friends and loved ones for all those special occasions throughout the year? Then treat them to a perfect treatment! ",
              "Contact me on 07852 135375 or info@sanctumwellbeing.co.uk to buy a gift voucher, which will then be sent by post or digitally. "
            ]}
          />
        </div>

        <div className='mb-16'>
          <Banner
            title="Health Cash Plans"
            subtitle=' - Do you have a Health Shield , Simply Health, BHSF or similar health cash plan?'
            imgUrl={lady}
            content={[
              "Depending or your policy and level of cover, you could be reimbursed the cost of treatments. Do check your policy or contact your provider first. Please contact me if you need further information.",
            ]}
          />
        </div>

        <div className='mb-4'>
          <ReviewBanner reviewData={reviewData} />
        </div>
        <Footer />
      </main>
    </>
  )
}
