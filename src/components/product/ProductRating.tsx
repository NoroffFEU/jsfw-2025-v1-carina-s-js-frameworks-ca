import type { Product } from "../../types/Product";
import Star, { type Variant } from "./Star";

type ProductRatingProps = {
  product: Product;
};

function getVariant(starNumber: number, rating: number): Variant {
  if (rating >= starNumber) return "full";
  if (rating >= starNumber - 0.5) return "half";
  return "empty";
}

const ProductRating = ({ product }: ProductRatingProps) => {
  return (
    <>
      <Star variant={getVariant(1, product.rating)} />
      <Star variant={getVariant(2, product.rating)} />
      <Star variant={getVariant(3, product.rating)} />
      <Star variant={getVariant(4, product.rating)} />
      <Star variant={getVariant(5, product.rating)} />
    </>
  );
};

export default ProductRating;
