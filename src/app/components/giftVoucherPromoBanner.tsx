import Link from 'next/link';
import btnStyles from './btn.module.scss';
import massage from '../static/images/massage.png';
import { Banner } from './banner';

export const GiftVoucherPromoBanner = () => {
  return (
    <div className="mb-16">
      <Banner
        title="Gift Vouchers"
        content={[
          'Give the gift of relaxation—vouchers for massage, reflexology, lymphatic drainage, and more at Sanctum Wellbeing in Cardiff. Ideal for birthdays, thank-yous, or anyone who deserves time to unwind.',
        ]}
        imgUrl={massage}
        imgAlt="Sanctum Wellbeing gift vouchers, Cardiff"
        afterContent={
          <Link
            href="/gift-vouchers"
            className={`${btnStyles.basic} ${btnStyles.view} inline-flex items-center justify-center font-sans font-medium text-lg md:text-base sm:text-sm mt-2 no-underline text-white`}
          >
            Learn more
          </Link>
        }
      />
    </div>
  );
};
