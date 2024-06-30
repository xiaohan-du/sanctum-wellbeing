'use client'

import { PriceCard } from './priceCard';

interface IPriceCardBox {
  priceCardData: Array<{
    title: string;
    time: string;
    price: string;
    imgUrl?: any;
    description: string[];
  }>;
}

export const PriceCardBox = ({ priceCardData }: IPriceCardBox) => {

  return (
    <div className='font-sans flex max-w-6xl 2xl:max-w-5xl xl:max-w-4xl lg:max-w-2xl md:max-w-md flex-col md:flex-col items-center w-full bg-transparent rounded-xl'>
      <div className='grid grid-cols-4 gap-4 w-full bg-transparent'>
        {
          priceCardData.map(({ title, time, price, imgUrl, description }, i) => (
            <PriceCard key={i} title={title} time={time} price={price} imgUrl={imgUrl} description={description} />
          ))
        }
      </div>
    </div>
  )
}
