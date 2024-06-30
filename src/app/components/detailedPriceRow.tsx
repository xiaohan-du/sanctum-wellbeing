'use client'

import ShowMoreText from "react-show-more-text";
import styles from './detailedPriceRow.module.scss';

interface IDetailedPriceRow {
  title: string;
  time: string;
  price: string;
  description: string[];
}

export const DetailedPriceRow = ({ title, time, price, description }: IDetailedPriceRow) => {
  const executeOnClick = (isExpanded: boolean) => {
    console.log(isExpanded);
  }
  return (
    <div className={`${styles.rowBorder} w-full p-4 2xl:p-4 xl:p-2 md:p-4 flex flex-row md:flex-col md:text-center items-center justify-between hover:shadow-xl hover:transition-shadow duration-300`}>
      <div className='w-1/6 md:w-3/4 m-1 text-lg 2xl:text-xl xl:text-sm font-normal'>{title}</div>
      <div className='flex flex-col md:flex-row items-center'>
        <div className='w-full flex flex-row m-1 justify-center'>
          <div className='text-lg m-1 xl:text-sm'>{time}</div>
        </div>
        <div className='text-lg 2xl:text-2xl xl:text-base m-1 font-normal'>{price}</div>
      </div>
      <div className='w-2/3 md:w-4/5 text-base lg:text-sm'>
        <ShowMoreText
          lines={3}
          more="Show more"
          less="Show less"
          anchorClass={`${styles.showMore}`}
          onClick={executeOnClick}
          expanded={false}
          truncatedEndingComponent={"... "}
        >
          <div className='w-full text-left m-1'>
          {
            description?.map((c, i) => {
              return (
                <p key={i}>
                  {c}
                </p>
              )
            })
          }</div>
        </ShowMoreText>
      </div>
    </div>
  )
}
