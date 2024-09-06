'use client'
import { useState } from 'react';
import Image from 'next/image';
import { PriceModal } from './priceModal';
import btnStyles from './btn.module.scss';
import styles from './priceCard.module.scss';

interface IPriceCard {
  title: string;
  time1: string;
  price1: string;
  time2?: string;
  price2?: string;
  time3?: string;
  price3?: string;
  imgUrl?: any;
  description: string[];
}

export const PriceCard = ({ title, time1, price1, time2, price2, time3, price3, imgUrl, description }: IPriceCard) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <div className="
        w-full
        font-sans 
        font-thin 
        tracking-wide 
        bg-white 
        border 
        border-gray-200 
        rounded-lg 
        shadow-lg
        h-fit
        hover:shadow-2xl
        hover:transition-shadow duration-300"
      >
        <Image className="rounded-t-lg h-56 xl:h-48 object-cover w-full" src={imgUrl} alt="" />
        <div className={`${styles.priceCardDetails} p-5 lg:p-3 flex items-center justify-between flex-col`}>
          <h5 className="lg:min-h-[64px] md:min-h-[16px] mb-2 text-xl 2xl:text-base text-gray-900 xl:leading-tight xl:text-base sm:text-xl">{title}</h5>
          <div>
            <div className='flex flex-row justify-center'>
              <p className="mb-3 font-normal text-gray-700">{time1}</p>
              <p className="ml-3 font-normal text-gray-700">{price1}</p>
            </div>
            <div className='flex flex-row justify-center'>
              <p className="mb-3 font-normal text-gray-700">{time2}</p>
              <p className="ml-3 font-normal text-gray-700">{price2}</p>
            </div>
            <div className='flex flex-row justify-center'>
              <p className="mb-3 font-normal text-gray-700">{time3}</p>
              <p className="ml-3 font-normal text-gray-700">{price3}</p>
            </div>
            <button onClick={toggleModal} className={`${btnStyles.basic} ${btnStyles.view} w-full text-white font-medium rounded-lg text-lg px-5 py-2.5 text-center xl:text-sm`} type="button">
              View Details
            </button>
          </div>
        </div>
      </div>
      {isModalVisible && (
        <PriceModal toggleModal={toggleModal} title={title} price1={price1} time1={time1} price2={price2} time2={time2} price3={price3} time3={time3} description={description}/>
      )}
    </>
  )
}
