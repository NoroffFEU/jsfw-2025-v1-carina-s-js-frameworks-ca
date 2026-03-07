import type { Product } from "../../types/Product";
import { Link } from "react-router-dom";
import DiscountBadge from "./DiscountBadge";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <article className="border-gray-light grid-cols-[minmax(0, 1fr)] grid cursor-pointer grid-rows-[max-content] rounded-sm border transition duration-300 ease-in-out sm:hover:scale-103 sm:hover:shadow-lg">
      <Link to={`/product/${product.id}`}>
        <div className="relative">
          <DiscountBadge product={product} />
          <img
            src={product.image.url}
            alt={product.image.alt}
            className="aspect-3/4 w-full rounded-sm object-cover"
          />
        </div>

        <div className="grid-cols-auto grid gap-6 p-4">
          <div className="mt-auto flex flex-col gap-2">
            <h3 className="font-semibold sm:text-lg">{product.title}</h3>
            <p>{product.rating} - Stars coming soon...</p>
          </div>
          <div className="flex flex-col gap-1 sm:gap-2">
            <p className="text-lg font-semibold sm:text-2xl">
              {product.discountedPrice} NOK
            </p>
            <div className="text-gray-dark flex flex-col sm:flex-row sm:gap-2">
              <p>Former Price:</p>
              <s>{product.price} NOK</s>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;
