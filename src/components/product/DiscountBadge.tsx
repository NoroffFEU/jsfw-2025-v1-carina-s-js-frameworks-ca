import type { Product } from "../../types/Product";

type DiscountBadgeProps = {
  product: Product;
};

const DiscountBadge = ({ product }: DiscountBadgeProps) => {
  const discountPercentage = Math.round(
    ((product.price - product.discountedPrice) / product.price) * 100,
  );

  if (product.discountedPrice >= product.price) return null;

  return (
    <div className="bg-primary-dark absolute rounded-tl-sm rounded-br-sm px-2 py-1 font-medium text-white sm:text-lg">
      <p>-{discountPercentage} %</p>
    </div>
  );
};

export default DiscountBadge;
