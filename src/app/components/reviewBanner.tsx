import { ReviewCard } from './reviewCard';
import { IReviewCard } from './reviewCard';
import styles from './reviewBanner.module.scss';

interface IReviewBanner {
  reviewData: Array<
    IReviewCard
  >
}

export const ReviewBanner = ({ reviewData }: IReviewBanner) => {
  return (
    <>
      <div className='grid grid-cols-3'>
        {
          reviewData.map((r, i) => (
            <ReviewCard
              key={i}
              name={r.name}
              content={r.content}
              rating={r.rating}
              isDecorate={r.isDecorate}
            />
          ))
        }
      </div>
      <div className='flex flex-row justify-center w-full mt-16'>
        <a href="https://www.google.com/maps/place/Sanctum+Wellbeing/@51.4922097,-3.205645,17z/data=!4m8!3m7!1s0x486e1bd061c1aea3:0x37d7f4e7ec5b7a50!8m2!3d51.4922097!4d-3.2030647!9m1!1b1!16s%2Fg%2F11szbq1_1v?authuser=0" target="_blank" rel="noopener noreferrer">
          <button className={`${styles.readMore} font-sans font-medium`}>
            Read More
          </button>
        </a>
      </div>
    </>
  )
}
