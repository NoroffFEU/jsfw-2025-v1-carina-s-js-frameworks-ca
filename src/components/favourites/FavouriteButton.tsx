type FavouriteButtonProps = {
  onClick: () => void;
};

const FavouriteButton = ({ onClick }: FavouriteButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="hover:bg-secondary-ultra-light flex size-12 items-center justify-center rounded-full bg-white font-medium transition duration-300 ease-in-out hover:font-semibold"
    >
      <span className="icon-[material-symbols--favorite-outline]"></span>
    </button>
  );
};

export default FavouriteButton;
