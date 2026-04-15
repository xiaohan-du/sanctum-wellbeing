import Link from 'next/link';
import btnStyles from './btn.module.scss';
import hand from '../static/images/hand.png';
import { Banner } from './banner';

export const AboutPromoBanner = () => {
  return (
    <div className="mb-16">
      <Banner
        title="About Sanctum Wellbeing"
        content={[
          'Sanctum Wellbeing is a calm, private space in Pontcanna, Cardiff where you can switch off, reset, and feel looked after. Personalised massage, reflexology, and lymphatic drainage—tailored to what you need each time you visit.',
        ]}
        imgUrl={hand}
        imgAlt="Sanctum Wellbeing, massage and reflexology in Cardiff"
        afterContent={
          <Link
            href="/about"
            className={`${btnStyles.basic} ${btnStyles.view} inline-flex items-center justify-center font-sans font-medium text-lg md:text-base sm:text-sm mt-2 no-underline text-white`}
          >
            Learn more
          </Link>
        }
      />
    </div>
  );
};
