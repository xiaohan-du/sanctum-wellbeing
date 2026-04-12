import Link from 'next/link';
import btnStyles from './btn.module.scss';
import foot from '../static/images/foot.png';
import { Banner } from './banner';

export const ReflexologyPromoBanner = () => {
  return (
    <div className="mb-16">
      <Banner
        title="Reflexology in Cardiff"
        content={[
          "If you're feeling stressed, overwhelmed, or out of balance, reflexology offers a deeply relaxing way to support your body and mind. At Sanctum Wellbeing in Cardiff, reflexology treatments are designed to help you slow down, switch off, and restore a sense of calm and wellbeing.",
        ]}
        imgUrl={foot}
        imgAlt="Reflexology treatment at Sanctum Wellbeing, Cardiff"
        afterContent={
          <Link
            href="/reflexology"
            className={`${btnStyles.basic} ${btnStyles.view} inline-flex items-center justify-center font-sans font-medium text-lg md:text-base sm:text-sm mt-2 no-underline text-white`}
          >
            Learn more
          </Link>
        }
      />
    </div>
  );
};
