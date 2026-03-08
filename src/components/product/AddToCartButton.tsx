import useCartStore from "../../store/cartStore";
import type { Product } from "../../types/Product";
import showSuccessToast from "../common/Toast";

type Props = {
  product: Product;
};

function AddToCartButton({ product }: Props) {
  const addItem = useCartStore((state) => state.addItem);
  const handleClick = () => {
    addItem(product);
    showSuccessToast("Item added to cart.");
  };

  return (
    <button onClick={handleClick} className="btn-primary">
      Add to Cart
    </button>
  );
}

export default AddToCartButton;
