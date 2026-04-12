import Image from 'next/image';
import Link from 'next/link';
import btnStyles from './btn.module.scss';
import lymphatic from '../static/images/lymphatic.png';

export const LymphaticPromoBanner = () => {
  return (
    <div
      className="
        w-full
        relative
        isolate
        flex
        items-center
        gap-x-6
        overflow-hidden
        bg-white
        py-10
        w-screen
        justify-center
        font-sans
        mb-16
      "
    >
      <div className="flex flex-row md:flex-col-reverse items-center 2xl:max-w-6xl xl:max-w-5xl lg:max-w-3xl md:max-w-lg sm:max-w-sm px-4">
        <div className="max-w-6xl flex flex-col flex-wrap items-start gap-x-4 gap-y-3 px-8 sm:px-4">
          <h2 className="text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-2xl">
            Lymphatic Drainage Massage in Cardiff
          </h2>
          <p className="text-lg xl:text-base lg:text-sm sm:text-base leading-6 text-gray-900">
            If you&apos;re feeling bloated, sluggish, or holding onto excess fluid, lymphatic drainage
            massage can help restore balance. At Sanctum Wellbeing I offer specialist treatments to
            support your body&apos;s natural detox process and help you feel lighter and more
            comfortable.
          </p>
          <Link
            href="/lymphatic-drainage"
            className={`${btnStyles.basic} ${btnStyles.view} inline-flex items-center justify-center font-sans font-medium text-lg md:text-base sm:text-sm mt-2 no-underline text-white`}
          >
            Learn more
          </Link>
        </div>
        <div className="pr-12 md:pr-0 md:mb-2 shrink-0">
          <Image
            src={lymphatic}
            alt="Lymphatic drainage massage treatment at Sanctum Wellbeing, Cardiff"
            className="object-cover h-44 lg:h-36 sm:h-48 w-44 lg:w-36 sm:w-48 min-w-11 lg:min-w-9 sm:min-w-7 mr-1 rounded-full border-solid border-8 border-white"
          />
        </div>
      </div>

      <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
      <div
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
        />
      </div>
    </div>
  );
};
