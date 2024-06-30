'use client'

import { DetailedPriceRow } from './detailedPriceRow';

interface IDetailedPriceRowBox {
  detailedPriceRowBoxData: Array<{
    title: string;
    time: string;
    price: string;
    description: string[];
  }>;
}

export const DetailedPriceRowBox = ({ detailedPriceRowBoxData }: IDetailedPriceRowBox) => {

  return (
    <div className='font-sans flex max-w-6xl 2xl:max-w-5xl xl:max-w-4xl lg:max-w-2xl md:max-w-md flex-col md:flex-col items-center w-full bg-white shadow-lg rounded-xl'>
      <div className='flex flex-col w-full'>
        {
          detailedPriceRowBoxData.map(({ title, time, price, description }, i) => (
            <DetailedPriceRow key={i} title={title} time={time} price={price} description={description} />
          ))
        }
      </div>
    </div>
  )
}
