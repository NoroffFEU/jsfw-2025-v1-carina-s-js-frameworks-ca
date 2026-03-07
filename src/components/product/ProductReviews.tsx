import type { Review } from "../../types/Product";
import Rating from "./Rating";

type Props = {
  review: Review;
};

const ProductReview = ({ review }: Props) => {
  return (
    <div className="bg-secondary-ultra-light border-secondary flex max-w-145 flex-col gap-2 rounded-sm border p-4">
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          <Rating rating={review.rating} />
        </div>
        <p className="font-semibold">{review.rating}</p>
      </div>
      <p>{review.description}</p>
      <p className="text-sm font-semibold">{review.username}</p>
    </div>
  );
};
export default ProductReview;
