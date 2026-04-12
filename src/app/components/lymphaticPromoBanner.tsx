import Link from 'next/link';
import btnStyles from './btn.module.scss';
import lymphatic from '../static/images/lymphatic.png';
import { Banner } from './banner';

export const LymphaticPromoBanner = () => {
  return (
    <div className="mb-16">
      <Banner
        title="Lymphatic Drainage Massage"
        content={[
          "If you're feeling bloated, sluggish, or holding onto excess fluid, lymphatic drainage massage can help restore balance. At Sanctum Wellbeing I offer specialist treatments to support your body's natural detox process and help you feel lighter and more comfortable.",
        ]}
        imgUrl={lymphatic}
        imgAlt="Lymphatic drainage massage treatment at Sanctum Wellbeing, Cardiff"
        afterContent={
          <Link
            href="/lymphatic-drainage"
            className={`${btnStyles.basic} ${btnStyles.view} inline-flex items-center justify-center font-sans font-medium text-lg md:text-base sm:text-sm mt-2 no-underline text-white`}
          >
            Learn more
          </Link>
        }
      />
    </div>
  );
};
