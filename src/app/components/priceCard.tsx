'use client'
import { useState } from 'react';
import Image from 'next/image';
import { PriceModal, type PriceTier } from './priceModal';
import btnStyles from './btn.module.scss';

function parsePounds(price: string): number {
  const n = Number.parseFloat(price.replace(/[^0-9.]/g, ''));
  return Number.isFinite(n) ? n : 0;
}

function formatFromPrice(tiers: PriceTier[]): string {
  if (!tiers.length) return '';
  const min = Math.min(...tiers.map((t) => parsePounds(t.price)));
  const rounded = Math.round(min * 100) / 100;
  return `£${rounded % 1 === 0 ? rounded : rounded.toFixed(2)}`;
}

interface IPriceCard {
  title: string;
  tiers: PriceTier[];
  imgUrl?: any;
  description: string[];
}

export const PriceCard = ({
  title,
  tiers,
  imgUrl,
  description,
}: IPriceCard) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const fromPrice = formatFromPrice(tiers);

  return (
    <>
      <div
        className={`
        w-full
        font-sans 
        font-thin 
        tracking-wide 
        bg-white 
        border 
        border-gray-200 
        rounded-lg 
        shadow-lg
        flex flex-col
        hover:shadow-2xl
        hover:transition-shadow duration-300`}
      >
        <Image className="rounded-t-lg h-56 xl:h-48 object-cover w-full" src={imgUrl} alt="" />
        <div className={'p-5 lg:p-3 flex items-center justify-between flex-col flex-grow'}>
          <div className="w-full text-center mb-1">
            <h5 className="lg:min-h-[48px] md:min-h-[16px] mb-1 text-xl 2xl:text-base text-gray-900 xl:leading-tight xl:text-base sm:text-xl">
              {title}
            </h5>
          </div>
          <div className="w-full">
            <p className="text-center mb-3">
              <span className="text-sm font-normal text-gray-600">from </span>
              <span className="text-2xl xl:text-xl font-normal text-gray-900 tabular-nums">
                {fromPrice}
              </span>
            </p>
            <button
              onClick={toggleModal}
              className={`${btnStyles.basic} ${btnStyles.view} w-full text-white font-medium rounded-lg text-lg px-5 py-2.5 text-center xl:text-sm mt-2`}
              type="button"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
      {isModalVisible && (
        <PriceModal
          toggleModal={toggleModal}
          title={title}
          tiers={tiers}
          description={description}
        />
      )}
    </>
  );
};
