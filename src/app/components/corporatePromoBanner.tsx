import Link from 'next/link';
import btnStyles from './btn.module.scss';
import corporate from '../static/images/corporate.png';
import { Banner } from './banner';

export const CorporatePromoBanner = () => {
  return (
    <div className="mb-16">
      <Banner
        title="Corporate Wellbeing"
        content={[
          'On-site wellbeing treatments for businesses across Cardiff and surrounding areas—support your team with stress relief, eased tension, and flexible options tailored to your workplace and schedule.',
        ]}
        imgUrl={corporate}
        imgAlt="Corporate wellbeing and on-site workplace treatments, Cardiff"
        afterContent={
          <Link
            href="/corporate-wellbeing"
            className={`${btnStyles.basic} ${btnStyles.view} inline-flex items-center justify-center font-sans font-medium text-lg md:text-base sm:text-sm mt-2 no-underline text-white`}
          >
            Learn more
          </Link>
        }
      />
    </div>
  );
};
