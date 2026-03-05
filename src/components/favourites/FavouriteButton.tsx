type FavouriteButtonProps = {
  onClick: () => void;
};

const FavouriteButton = ({ onClick }: FavouriteButtonProps) => {
  return (
    <button onClick={onClick} className="btn-round" aria-label="Favourites">
      <span className="iconify-[material-symbols--favorite-outline]"></span>
    </button>
  );
};

export default FavouriteButton;
