import useCartStore from "../../store/cartStore";
import showSuccessToast from "../common/Toast";

type Props = {
  productId: string;
  quantity: number;
};

const QuantitySelector = ({ productId, quantity }: Props) => {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);

  const handleDecrease = () => {
    if (quantity <= 1) {
      removeItem(productId);
      showSuccessToast("Item removed from cart.");
    } else {
      updateQuantity(productId, quantity - 1);
    }
  };

  const handleIncrease = () => {
    updateQuantity(productId, quantity + 1);
  };

  return (
    <div className="bg-secondary-ultra-light flex w-max items-center gap-2 rounded-sm p-1">
      <button
        onClick={handleDecrease}
        className="hover:bg-secondary-light flex size-6 items-center justify-center rounded-sm bg-white transition duration-500 ease-in-out"
      >
        <span className="iconify-[material-symbols--remove]"></span>
      </button>
      <p className="px-3 font-semibold">{quantity}</p>
      <button
        onClick={handleIncrease}
        className="hover:bg-secondary-light flex size-6 items-center justify-center rounded-sm bg-white transition duration-500 ease-in-out"
      >
        <span className="iconify-[material-symbols--add]"></span>
      </button>
    </div>
  );
};

export default QuantitySelector;
