'use client'

import { PriceCard } from './priceCard';

interface IPriceCardBox {
  priceCardData: Array<{
    title: string;
    time1: string;
    price1: string;
    time2?: string;
    price2?: string;
    time3?: string;
    price3?: string;
    imgUrl?: any;
    description: string[];
  }>;
}

export const PriceCardBox = ({ priceCardData }: IPriceCardBox) => {

  return (
    <div className='font-sans flex max-w-6xl 2xl:max-w-5xl xl:max-w-4xl lg:max-w-2xl md:max-w-md flex-col md:flex-col items-center w-full bg-transparent rounded-xl'>
      <div className='grid grid-cols-4 gap-4 lg:gap-2 md:grid-cols-2 sm:grid-cols-1 w-full bg-transparent'>
        {
          priceCardData.map(({ title, time1, price1, time2, price2, time3, price3, imgUrl, description }, i) => (
            <PriceCard key={i} title={title} time1={time1} price1={price1} time2={time2} price2={price2} time3={time3} price3={price3} imgUrl={imgUrl} description={description} />
          ))
        }
      </div>
    </div>
  )
}
