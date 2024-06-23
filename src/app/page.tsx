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
import head from './static/images/head.png';
import hand from './static/images/hand.png';
import back from './static/images/back.png';
import foot from './static/images/foot.png';
import massage from './static/images/massage.png';
import lady from './static/images/lady.png';
import forehead from './static/images/forehead.png';
import { Footer } from './components/footer';
import { OpeningHours } from './components/openingHours';
import { vtctRowData } from './static/data/vtctRowData';
import { ImageRow } from './components/imageRow';
import { Ad } from './components/ad';
import { adData } from './static/data/adData';
import { DetailedPriceRowBox } from './components/detailedPriceRowBox';
import { detailedPriceRowBoxData } from './static/data/detailedPriceRowBoxData';

export default function Home() {
  return (
    <>
      <main className={`${styles.main} px-8 max-w-screen-xl font-serif font-thin tracking-normal sm:px-4`}>
        <MainBanner />
        <ContactRow />
        <Ad adData={adData}/>
        <div className='mb-16'>
          <Banner
            title="About Me"
            content={["I am Louise Davies, MAR, CRM5 DIP, CNHC. I’m fully insured and DBS checked, Level 5 Clinical Reflexologist and Indian Head Massage therapist based in Cardiff. I set up my practice Sanctum Wellbeing to help others take the time to relax, de-stress and alleviate tension and anxieties. As a Reflexologist Practitioner and practising other complementary therapies being able to give my clients a calm, stress free hour to themselves so they can re-set and focus on their own wellbeing and health is the most rewarding feeling for me. If you have any queries, please do not hesitate to contact me on 07852 135375."]}
            bannerHeight='h-80 md:h-112 sm:h-192'
            negativeTitleMargin='-mt-20 xl:-mt-16 lg:-mt-12 md:-mt-8'
            imgUrl={foot}
          />
        </div>
        <div className='-mt-36 xl:-mt-32 lg:-mt-28 md:-mt-24 mb-16 z-10'>
          <CardRow cardRowData={cardRowData} />
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
            title="Indian Head Massage"
            content={["Indian head massage is an ancient therapeutic practice that has been used in India for over 2000 years, (since around 600 B.C.). It is also known as champissage, and is a treatment that focuses on massaging acupressure points (Marma Points) along the head, neck, and shoulders, often using various massage techniques to improve hair and scalp condition.", "It is understood that Indian head massage can not only reduce headaches and improve physical well-being, but it can also improve mental and emotional wellness too. It can help ease tension and stress, promote relaxation and wellbeing.", "At Sanctum Wellbeing an Indian Head Massage incorporates the full back, neck, shoulders, arms, face and head.", "It is usually done whilst seated and through light clothing, however we use a massage chair or massage bed which lets you fully relax, you have the option to remove upper garments and have oils applied to the body, and head. Wraps are provided to cover up."]}
            bannerHeight='h-96 2xl:h-128 xl:h-128 md:h-160 sm:h-232'
            negativeTitleMargin='-mt-4 xl:-mt-8'
            imgUrl={forehead}
          />
        </div>
        <div className='-mt-28 mb-16 z-20'>
          <ImageRow imageRowData={vtctRowData} />
        </div>

        <div className='mb-16'>
          <Banner
            title="The Business"
            bannerHeight='h-96 2xl:h-96 lg:h-96 md:h-152 sm:h-224'
            negativeTitleMargin='-mt-4 sm:-mt-10'
            imgUrl={hand}
            content={["I run my practice from my lovely treatment room in Pontcanna, Cardiff.",
              "Mobile visits are available. Onsite workplace visits can be arranged to suit your business requirements.",
              "The treatment room has been created for the senses, for you to be indulged with wonderfully scented oils, warm fluffy blankets which are heated on cold days, soft music playing, and comfortable relaxing chairs and beds. Herbal teas and water are provided, and complimentary face masks for during your treatment. Hot water bottles are also to hand should you require one. ",
              "Services I provide are Reflexology, Thai Foot Massage, Aromatherapy Facial Massage, Indian Head massage. I am always updating my skills, and will be offering new therapies soon, watch this space. "]}
          />
        </div>
        <div className='-mt-24 lg:-mt-20 sm:-mt-32 mb-16 z-10'>
          <MediaRow mediaRowData={mediaRowData} />
        </div>

        <div className='mb-16'>
          <Banner
            title="Treatments and Prices"
            negativeTitleMargin='-mt-16 sm:-mt-32'
            imgUrl={head}
            bannerHeight='h-96 md:h-136 sm:h-216'
            content={[
              "Indian Head Massage includes the back, shoulders, neck, arms, face and head. This treatment can be done clothed or you may wish to remove your upper garments to allow me to apply oil to the skin and apply firmer pressure to the muscles depending upon how tense you are, and what you need. Wraps are provided for you.",
              "The Ultimate is a combination of Indian Head Massage, Hand and Feet Reflexology. This is the ultimate super relaxing and stress busting treatment.",
              "Mobile treatments in Cardiff are available where I come and set up in the comfort of your own home. Outside Cardiff a fee to cover travel cost will be incurred. "
            ]}
          />
        </div>
        <div className='-mt-36 2xl:-mt-32 sm:-mt-44 mb-16 z-10'>
          <DetailedPriceRowBox detailedPriceRowBoxData={detailedPriceRowBoxData} />
        </div>

        <div className='mb-16'>
          <Banner
            title="Gift Vouchers"
            bannerHeight='h-52 xl:h-56 md:h-96 sm:h-152'
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
        <Footer />
      </main>
    </>
  )
}
