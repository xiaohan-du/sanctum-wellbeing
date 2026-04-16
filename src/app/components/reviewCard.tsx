"use client"
import { StarRating } from './starRating';
import Image from 'next/image';
import wheat from '../static/images/wheat.svg';

export interface IReviewCard {
  name: string;
  content: string;
  rating: number;
  isDecorate?: boolean;
  linkUrl?: string;
}

export const ReviewCard = ({ name, content, rating, isDecorate, linkUrl }: IReviewCard) => {
  return (
    <>
      {!isDecorate ? (
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col justify-between overflow-hidden rounded-2xl m-2 sm:mx-0 w-80 2xl:w-72 xl:w-56 md:w-52 sm:w-72 h-80 2xl:h-72 xl:h-56 md:h-56 sm:h-72 border border-[#ece9ff] bg-white shadow-[0_10px_24px_-14px_rgba(17,24,39,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d8d1ff] hover:shadow-[0_18px_34px_-16px_rgba(17,24,39,0.35)]"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#9089fc] via-[#a89ffc] to-[#ff80b5]" />
          <div className="relative z-[1] flex h-full flex-col justify-between px-4 py-4 lg:px-2 lg:py-2 sm:px-4 sm:py-4">
            <div>
              <div className="flex justify-center mb-5 xl:mb-2">
                <div className="rounded-md bg-[#f8f7ff] px-3 py-1 border border-[#e9e5ff]">
                  <StarRating rating={rating} />
                </div>
              </div>
              <p className="mb-4 xl:mb-1 2xl:text-sm xl:text-xs sm:text-sm leading-relaxed text-gray-700">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="quote-left"
                  className="w-6 pr-2 inline-block text-[#9089fc]/75"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                  />
                </svg>
                {content}
              </p>
            </div>
            <div className="flex justify-end items-end">
              <h5 className="text-lg 2xl:text-base xl:text-sm font-semibold text-gray-900 border-b-2 border-[#e8e4ff] pb-0.5">
                {name}
              </h5>
            </div>
          </div>
        </a>
      ) : (
        <div className="group relative flex flex-col justify-center items-center overflow-hidden rounded-2xl m-2 sm:mx-0 w-80 2xl:w-72 xl:w-56 sm:w-72 md:w-52 h-80 2xl:h-72 xl:h-56 md:h-56 sm:h-72 border border-[#ece9ff] bg-white shadow-[0_10px_24px_-14px_rgba(17,24,39,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d8d1ff] hover:shadow-[0_18px_34px_-16px_rgba(17,24,39,0.35)]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#9089fc] via-[#a89ffc] to-[#ff80b5]" />
          <div className="relative z-[1] flex h-full w-full flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center mt-28">
              <p className="-mb-48 text-2xl text-center text-gray-800">Excellent <br /> Reviews</p>
              <Image src={wheat} alt="Logo" className="h-80 w-80" />
            </div>
          </div>
        </div>
      )
      }
    </>
  );
};
