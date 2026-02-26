type FavouritesModalProps = {
  onClose: () => void;
};

const FavouritesModal = ({ onClose }: FavouritesModalProps) => {
  return (
    <dialog open className="rounded-sm p-4 shadow-sm">
      <p>This is a modal</p>
      <button onClick={onClose}>Close</button>
    </dialog>
  );
};

export default FavouritesModal;
