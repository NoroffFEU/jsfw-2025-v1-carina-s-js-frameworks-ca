import type { Product } from "../../types/Product";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div>
      <ol>
        <li>{product.id}</li>
        <li>{product.title}</li>
        <li>{product.description}</li>
        <li>{product.price}</li>
        <li>{product.discountedPrice}</li>
        <li>{product.image.url}</li>
        <li>{product.image.alt}</li>
        <li>{product.rating}</li>
      </ol>
    </div>
  );
};

export default ProductCard;
