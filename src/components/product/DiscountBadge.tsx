import type { Product } from "../../types/Product";

type DiscountBadgeProps = {
  product: Product;
  size: "small" | "medium" | "large";
};

const DiscountBadge = ({ product, size = "medium" }: DiscountBadgeProps) => {
  const sizeStyles = {
    small: "px-2 py-1 text-sm",
    medium: "px-3 py-1 text-lg",
    large: "px-4 py-2 text-xl",
  };

  const discountPercentage = Math.round(
    ((product.price - product.discountedPrice) / product.price) * 100,
  );

  if (product.discountedPrice >= product.price) return null;

  return (
    <div
      className={`bg-primary-dark absolute rounded-tl-sm rounded-br-sm font-medium text-white ${sizeStyles[size]}`}
    >
      <p>-{discountPercentage} %</p>
    </div>
  );
};

export default DiscountBadge;
