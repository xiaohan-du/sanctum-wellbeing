import { ReviewCard } from './reviewCard';
import { IReviewCard } from './reviewCard';

interface IReviewBanner {
  reviewData: Array<
    IReviewCard
  >
}

export const ReviewBanner = ({ reviewData }: IReviewBanner) => {
  return (
    <div>
      {
        reviewData.map((r, i) => (
          <ReviewCard key={i} name={r.name} content={r.content} rating={r.rating} />
        ))
      }
    </div>
  )
}
