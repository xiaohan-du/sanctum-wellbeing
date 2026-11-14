import styles from './ad.module.scss';
import btnStyles from './btn.module.scss';
import Image from 'next/image';

interface IAd {
  adData: {
    title?: string;
    content?: string;
    imgUrl?: any;
    url?: string;
    voucherContent?: string;
    voucherUrl?: string;
  };
}

export const Ad = ({ adData }: IAd) => {
  return (
    <div
      className={`${styles.ad} 
        w-full 
        relative 
        isolate 
        flex 
        flex-col
        items-center 
        gap-x-6 
        overflow-hidden 
        bg-gray-50 
        py-6
        w-screen
        justify-center
        font-sans
        font-normal
        text-white`}
    >
      <div className={`
        w-full 
        flex 
        flex-row 
        lg:flex-col 
        px-12 
        items-center 
        justify-center 
        md:flex-col 
        2xl:max-w-6xl 
        xl:max-w-5xl 
        lg:max-w-3xl 
        md:max-w-lg 
        sm:max-w-sm`}
      >
        <div className='text-6xl lg:text-4xl mt-1'>{adData.title}</div>
        {
          adData.imgUrl ? (
            <Image src={adData.imgUrl} alt="Logo" className='mx-4 h-16 lg:h-12 sm:h-8 lg:mt-4' />
          ) : null
        }
      </div>
      <div className="flex w-full flex-wrap items-center justify-center gap-4 px-4">
      {
        adData.content ? (
          <a href={adData.url} target="_blank" rel="noopener noreferrer" className={`${btnStyles.basic} ${btnStyles.book} inline-flex items-center justify-center px-2 text-center font-sans font-medium text-3xl md:text-lg sm:text-md`}>
              {adData.content}
          </a>
        ) : null
      }
      {adData.voucherContent && adData.voucherUrl ? (
        <a href={adData.voucherUrl} target="_blank" rel="noopener noreferrer" className={`${btnStyles.basic} ${btnStyles.book} ${btnStyles.voucher} inline-flex items-center justify-center px-2 text-center font-sans font-medium text-3xl md:text-lg sm:text-md`}>
          {adData.voucherContent}
        </a>
      ) : null}
      </div>
    </div>
  )
}
