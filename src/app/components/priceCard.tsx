'use client'
import { useState } from 'react';
import test from '../static/images/image-1.jpeg';
import Image from 'next/image';
import { PriceModal } from './priceModal';
import btnStyles from './btn.module.scss';
import styles from './priceCard.module.scss';

interface IPriceCard {
  title: string;
  time: string;
  price: string;
  imgUrl?: any;
  description: string[];
}

export const PriceCard = ({ title, time, price, imgUrl, description }: IPriceCard) => {
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
        dark:bg-gray-800 
        dark:border-gray-700
        h-fit
        hover:shadow-2xl
        hover:transition-shadow duration-300"
      >
        <Image className="rounded-t-lg h-56 object-cover w-full" src={imgUrl} alt="" />
        <div className={`${styles.priceCardDetails} p-5 flex items-center justify-between flex-col`}>
          <h5 className="mb-2 text-xl text-gray-900">{title}</h5>
          <div>
            <div className='flex flex-row justify-center'>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{time}</p>
              <p className="ml-3 font-normal text-gray-700 dark:text-gray-400">{price}</p>
            </div>
            <button onClick={toggleModal} className={`${btnStyles.basic} ${btnStyles.view} w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`} type="button">
              View Details
            </button>
          </div>
        </div>
      </div>
      {isModalVisible && (
        <PriceModal toggleModal={toggleModal} title={title} price={price} time={time} description={description}/>
      )}
    </>
  )
}
