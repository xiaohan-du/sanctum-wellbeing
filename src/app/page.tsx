import styles from './page.module.scss';
import { MainBanner } from './components/mainBanner';
import { Banner } from './components/banner';
import { CardRow } from './components/cardRow';
import { MediaRow } from './components/mediaRow';
import { cardRowData } from './static/data/cardRowData';
import { ReviewBanner } from './components/reviewBanner';
import { reviewData } from './static/data/reviewData';
import { mediaRowData } from './static/data/mediaRowData';

export default function Home() {
  return (
    <>
      <main className={`${styles.main} max-w-screen-xl font-serif font-thin tracking-normal`}>
        <MainBanner />

        <div className='mb-16'>
          <Banner
            title="About Me"
            content={["I am Louise Davies, MAR, CRM5 DIP, CNHC. I’m fully insured and DBS checked, Level 5 Clinical Reflexologist and Indian Head Massage therapist based in Cardiff. I set up my practice Sanctum Wellbeing to help others take the time to relax, de-stress and alleviate tension and anxieties. As a Reflexologist Practitioner and practising other complementary therapies being able to give my clients a calm, stress free hour to themselves so they can re-set and focus on their own wellbeing and health is the most rewarding feeling for me. If you have any queries, please do not hesitate to contact me on 07852 135375."]}
            bannerHeight='h-72'
            negativeTitleMargin='-mt-16'
          />
        </div>
        <div className='-mt-36 mb-16 z-10'>
          <CardRow cardRowData={cardRowData} />
        </div>

        <div className='mb-16'>
          <Banner
            title="The Business"
            bannerHeight='h-72'
            negativeTitleMargin='-mt-4'
            content={["I run my practice from my lovely treatment room in Pontcanna, Cardiff.",
              "Mobile visits are available. Onsite workplace visits can be arranged to suit your business requirements.",
              "The treatment room has been created for the senses, for you to be indulged with wonderfully scented oils, warm fluffy blankets which are heated on cold days, soft music playing, and comfortable relaxing chairs and beds. Herbal teas and water are provided, and complimentary face masks for during your treatment. Hot water bottles are also to hand should you require one. ",
              "Reflexology balms are created locally by The Apothecary, Canton, they are plant based and infused with wonderfully scented oils. "]}
          />
        </div>
        <div className='-mt-24 mb-16 z-10'>
          <MediaRow mediaRowData={mediaRowData} />
        </div>

        <div className='mb-16'>
          <Banner
            title="Events - Corporate and Social"
            content={[
              "Are you organising an event or would like to arrange a bespoke wellbeing day for friends/family or team building event for your workforce? Can you see the signs of stress in the workplace and would like to help? Would you like to help optimise employee’s wellbeing?",
              '"Sanctum Wellbeing in the Workplace Days" are onsite visits offering complementary therapies that can be arranged to suit your business requirements. ',
              "If you would like further information on Sanctum Wellbeing in the Workplace Days please do not hesitate to get in touch and we can discuss the day in further detail and your requirements. Contact Louise on 07852 135375 or info@sanctumwellbeing.co.uk"
            ]}
          />
        </div>

        <div className='mb-16'>
          <Banner
            title="Gift Vouchers"
            content={[
              "Wondering what to get friends and loved ones for all those special occasions throughout the year? Then treat them to a perfect treatment! ",
              "Vouchers are available for Reflexology 60 min treatment £45 or Indian Head Massage 45 min treatment £40, or ‘The Ultimate’ a 90 min treatment £75 combining both Indian Head Massage and Reflexology. ",
              "Contact me on 07852 135375 or info@sanctumwellbeing.co.uk to buy a gift voucher, which will then be sent by post or digitally. "
            ]}
          />
        </div>

        <div className='mb-16'>
          <ReviewBanner reviewData={reviewData} />
        </div>

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
