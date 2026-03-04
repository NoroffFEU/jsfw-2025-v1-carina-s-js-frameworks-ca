import type { Product } from "../../types/Product";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <article className="border-primary-ultra-light grid-cols-[minmax(0, 1fr)] grid cursor-pointer grid-rows-[max-content] rounded-sm border transition duration-300 ease-in-out sm:hover:scale-103 sm:hover:shadow-lg">
      <img
        src={product.image.url}
        alt={product.image.alt}
        className="h-95 w-full rounded-sm object-cover"
      />
      <div className="flex flex-col gap-6 p-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p>{product.rating} - Stars coming soon...</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-semibold">
            {product.discountedPrice} NOK
          </p>
          <div className="text-gray-dark flex gap-2">
            <p>Former Price:</p>
            <s>{product.price} NOK</s>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
