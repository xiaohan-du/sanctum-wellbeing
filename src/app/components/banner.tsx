import Image from 'next/image';

interface IBanner {
  title?: string;
  subtitle?: string;
  content?: string[];
  bannerHeight?: string;
  negativeTitleMargin?: string;
  imgUrl?: any;
}

export const Banner = ({ title, subtitle, content, bannerHeight, negativeTitleMargin, imgUrl }: IBanner) => {
  return (
    <div
      className={`
        ${bannerHeight}
        w-full 
        relative 
        isolate 
        flex 
        items-center 
        gap-x-6 
        overflow-hidden 
        bg-gray-50 
        py-10
        w-screen
        justify-center
        font-sans`}
    >
      <div className={`${negativeTitleMargin} flex flex-row md:flex-col-reverse items-center 2xl:max-w-6xl xl:max-w-5xl lg:max-w-3xl md:max-w-lg sm:max-w-sm`}>
        <div className="max-w-6xl flex flex-col flex-wrap items-start gap-x-4 gap-y-2 px-12 sm:px-8">
          <h1 className='text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-3xl'>
            {title}
          </h1>
          <h1 className='text-2xl xl:text-xl lg:text-lg md:text-base sm:text-xl italic'>
            {subtitle}
          </h1>
          {
            content?.map((c, i) => {
              return (
                <p key={i} className="text-lg xl:text-base lg:text-sm sm:text-lg leading-6 text-gray-900">
                  {c}
                </p>
              )
            })
          }
        </div>
        <div className='pr-12 md:pr-0 md:mb-2'>
          <Image src={imgUrl} alt="photo" className='object-cover h-44 lg:h-36 sm:h-28 w-44 lg:w-36 sm:w-28 min-w-11 lg:min-w-9 sm:min-w-7 mr-1 rounded-full border-solid border-8 border-white' />
        </div>

        <div className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
          <div className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{ clipPath: "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" }}
          >
          </div>
        </div>
        <div className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
          <div className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30" style={{ clipPath: "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" }}></div>
        </div>
        
      </div>
    </div >
  )
}