type RemoveButtonProps = {
  onClick: () => void;
};

const RemoveButton = ({ onClick }: RemoveButtonProps) => {
  return (
    <button onClick={onClick} className="text-gray-dark">
      <span className="iconify-[material-symbols--delete-outline]"></span>
    </button>
  );
};

export default RemoveButton;
