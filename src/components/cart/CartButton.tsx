type CartButtonProps = {
  onClick: () => void;
};

const CartButton = ({ onClick }: CartButtonProps) => {
  return (
    <button onClick={onClick} className="btn-round" aria-label="Cart">
      <span className="iconify-[material-symbols--shopping-bag-outline]"></span>
    </button>
  );
};

export default CartButton;
