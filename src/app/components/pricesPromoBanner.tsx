import Link from 'next/link';
import btnStyles from './btn.module.scss';
import asian from '../static/images/asian.png';
import { Banner } from './banner';

export const PricesPromoBanner = () => {
  return (
    <div className="mb-16">
      <Banner
        title="Treatments and Prices"
        content={[
          'Explore all treatments with clear durations and prices, so you can choose what suits you best—then tap through for full details and book online when you’re ready (or get in touch if you’d like help deciding).',
        ]}
        imgUrl={asian}
        imgAlt="Treatments and prices at Sanctum Wellbeing, Cardiff"
        afterContent={
          <Link
            href="/prices"
            className={`${btnStyles.basic} ${btnStyles.view} inline-flex items-center justify-center font-sans font-medium text-lg md:text-base sm:text-sm mt-2 no-underline text-white`}
          >
            Learn more
          </Link>
        }
      />
    </div>
  );
};
