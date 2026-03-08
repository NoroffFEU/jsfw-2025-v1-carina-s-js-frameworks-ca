type RemoveButtonProps = {
  onClick: () => void;
};

const RemoveButton = ({ onClick }: RemoveButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="text-gray-dark hover:bg-secondary-ultra-light flex size-12 items-center justify-center rounded-full hover:text-black"
    >
      <span className="iconify-[material-symbols--delete-outline]"></span>
    </button>
  );
};

export default RemoveButton;
