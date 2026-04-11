import Image from 'next/image';
import Link from 'next/link';
import btnStyles from './btn.module.scss';

interface IBanner {
  title?: string;
  subtitle?: string;
  content?: string[];
  bannerHeight?: string;
  negativeTitleMargin?: string;
  imgUrl?: any;
  cta?: { href: string; label: string };
  itemsAlign?: 'center' | 'start';
  paddingYClass?: string;
}

export const Banner = ({
  title,
  subtitle,
  content,
  bannerHeight,
  negativeTitleMargin,
  imgUrl,
  cta,
  itemsAlign = 'center',
  paddingYClass = 'py-10',
}: IBanner) => {
  return (
    <div
      className={`
        ${bannerHeight}
        relative 
        isolate 
        flex 
        ${itemsAlign === 'start' ? 'items-start' : 'items-center'}
        w-full
        max-w-[100vw]
        overflow-x-clip
        overflow-y-visible
        bg-white 
        ${paddingYClass}
        justify-center
        font-sans`}
    >
      <div
        className={`${negativeTitleMargin ?? ''} flex w-full min-w-0 max-w-full flex-row flex-wrap items-center justify-center gap-x-4 gap-y-6 md:flex-col-reverse md:gap-y-8 2xl:max-w-6xl xl:max-w-5xl lg:max-w-3xl md:max-w-lg sm:max-w-sm`}
      >
        <div className="flex w-full min-w-0 max-w-full flex-[1_1_16rem] flex-col flex-wrap items-start gap-x-4 gap-y-2 px-4 sm:px-6 xl:px-10">
          <h1 className="w-full break-words text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-3xl">
            {title}
          </h1>
          <h1 className="w-full break-words text-2xl xl:text-xl lg:text-lg md:text-base sm:text-xl italic">
            {subtitle}
          </h1>
          {content?.map((c, i) => (
            <p
              key={i}
              className="max-w-full text-pretty text-lg leading-6 text-gray-900 xl:text-base lg:text-sm sm:text-lg"
            >
              {c}
            </p>
          ))}
          {cta ? (
            <div className="mt-6 flex w-full justify-center">
              <Link
                href={cta.href}
                className={`${btnStyles.basic} ${btnStyles.view} inline-flex items-center justify-center text-center text-white font-medium rounded-lg`}
              >
                {cta.label}
              </Link>
            </div>
          ) : null}
        </div>
        {imgUrl ? (
          <div className="flex shrink-0 justify-center px-2 md:mb-2 md:pr-8 lg:pr-12">
            <Image
              src={imgUrl}
              alt=""
              className="h-32 w-32 shrink-0 rounded-full border-[5px] border-white object-cover sm:h-40 sm:w-40 sm:border-[6px] md:h-44 md:w-44 md:border-8 lg:h-36 lg:w-36 xl:h-44 xl:w-44"
            />
          </div>
        ) : null}

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
    </div>
  );
};
