type searchResultsProps = {
  onClose: () => void;
};

const searchResultsModal = ({ onClose }: searchResultsProps) => {
  return (
    <dialog open className="rounded-sm p-4 shadow-sm">
      <p>These are search results</p>
      <button onClick={onClose}>Close</button>
    </dialog>
  );
};

export default searchResultsModal;
