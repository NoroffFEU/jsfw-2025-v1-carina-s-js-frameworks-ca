type FavouriteButtonProps = {
  onClick: () => void;
};

const FavouriteButton = ({ onClick }: FavouriteButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="sm:hover:bg-secondary-ultra-light flex size-8 items-center justify-center rounded-full bg-white text-lg font-medium transition duration-500 ease-in-out sm:size-12"
      aria-label="Favourites"
    >
      <span className="iconify-[material-symbols--favorite-outline]"></span>
    </button>
  );
};

export default FavouriteButton;
