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
      <div className={`${negativeTitleMargin} max-w-screen-xl w-full flex flex-row items-center`}>
        <div className="flex flex-col flex-wrap items-start gap-x-4 gap-y-2 max-w-screen-xl px-12">
          <h1 className='text-4xl'>
            {title}
          </h1>
          <h1 className='text-2xl italic'>
            {subtitle}
          </h1>
          {
            content?.map((c, i) => {
              return (
                <p key={i} className="text-lg leading-6 text-gray-900 text-justify">
                  {c}
                </p>
              )
            })
          }
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
        <Image src={imgUrl} alt="photo" className='object-cover h-44 w-44 w-auto mr-1 rounded-full border-solid border-8 border-white'/>
      </div>
    </div >
  )
}