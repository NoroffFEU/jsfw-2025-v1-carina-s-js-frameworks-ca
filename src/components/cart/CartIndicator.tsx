import useCartStore from "../../store/cartStore";

const CartIndicator = () => {
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  if (itemCount === 0) return null;

  return (
    <span className="bg-primary-dark absolute left-4 flex size-4 -translate-y-1/2 items-center justify-center rounded-full text-xs text-white sm:left-6">
      {itemCount}
    </span>
  );
};

export default CartIndicator;
