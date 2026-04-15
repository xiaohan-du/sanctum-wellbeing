import Link from 'next/link';
import btnStyles from './btn.module.scss';
import lady from '../static/images/lady.png';
import { Banner } from './banner';

export const HealthCashPlansPromoBanner = () => {
  return (
    <div className="mb-16">
      <Banner
        title="Health Cash Plans"
        content={[
          'If you have a health cash plan—such as Health Shield, Simplyhealth, Medicash, or similar—you may be able to claim back the cost of eligible complementary therapies. Check your policy and ask if you need help.',
        ]}
        imgUrl={lady}
        imgAlt="Health cash plans and treatment reimbursement at Sanctum Wellbeing, Cardiff"
        afterContent={
          <Link
            href="/health-cash-plans"
            className={`${btnStyles.basic} ${btnStyles.view} inline-flex items-center justify-center font-sans font-medium text-lg md:text-base sm:text-sm mt-2 no-underline text-white`}
          >
            Learn more
          </Link>
        }
      />
    </div>
  );
};
