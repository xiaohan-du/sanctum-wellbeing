'use client'

import { PriceCard } from './priceCard';
import type { PriceTier } from './priceModal';

export interface PriceCardItem {
  title: string;
  tiers: PriceTier[];
  imgUrl?: any;
  description: string[];
}

interface IPriceCardBox {
  priceCardData: PriceCardItem[];
}

export const PriceCardBox = ({ priceCardData }: IPriceCardBox) => {
  return (
    <div className="font-sans flex max-w-7xl 2xl:max-w-5xl xl:max-w-4xl lg:max-w-2xl md:max-w-md sm:max-w-xs flex-col md:flex-col items-center w-full bg-transparent rounded-xl">
      <div className="grid grid-cols-5 gap-4 lg:gap-2 sm:gap-4 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 w-full bg-transparent">
        {priceCardData.map(({ title, tiers, imgUrl, description }, i) => (
          <PriceCard
            key={i}
            title={title}
            tiers={tiers}
            imgUrl={imgUrl}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};
