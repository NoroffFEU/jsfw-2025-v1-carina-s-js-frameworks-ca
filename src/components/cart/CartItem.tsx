import type { Product } from "../../types/Product";
import { Link } from "react-router-dom";
import DiscountBadge from "../product/DiscountBadge";
import RemoveButton from "../product/RemoveButton";
import QuantitySelector from "./QuantitySelector";

type Props = {
  product: Product;
  quantity: number;
};

const CartItem = ({ product, quantity }: Props) => {
  const hasDiscount = product.discountedPrice < product.price;

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
        <QuantitySelector productId={product.id} quantity={quantity} />
        <RemoveButton onClick={() => console.log("Item removed")} />
        <div className="grid-cols-auto grid gap-6 p-4">
          <div className="mt-auto flex flex-col gap-2">
            <h3 className="font-semibold sm:text-lg">{product.title}</h3>
          </div>
          <div className="flex flex-col gap-1 sm:gap-2">
            {hasDiscount ? (
              <>
                <p className="text-lg font-semibold sm:text-2xl">
                  {product.discountedPrice} NOK
                </p>
                <div className="text-gray-dark flex flex-col flex-wrap sm:gap-2 md:flex-row">
                  <p>Former Price:</p>
                  <s>{product.price} NOK</s>
                </div>
              </>
            ) : (
              <p className="text-lg font-semibold sm:text-2xl">
                {product.price} NOK
              </p>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default CartItem;
