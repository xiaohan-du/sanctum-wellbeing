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
          <div className="mt-2 flex flex-wrap items-center gap-3">
          <Link
            href="/gift-vouchers"
            className={`${btnStyles.basic} ${btnStyles.view} inline-flex items-center justify-center font-sans font-medium text-lg md:text-base sm:text-sm no-underline text-white`}
          >
            Learn more
          </Link>
          <a
            href="https://www.fresha.com/book-now/sanctum-wellbeing-gq5cksyy/gift-cards?share&pId=1057120"
            target="_blank"
            rel="noopener noreferrer"
            className={`${btnStyles.basic} ${btnStyles.view} inline-flex items-center justify-center font-sans font-medium text-lg md:text-base sm:text-sm no-underline text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9089fc]`}
          >
            Buy a voucher
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          </div>
        }
      />
    </div>
  );
};
