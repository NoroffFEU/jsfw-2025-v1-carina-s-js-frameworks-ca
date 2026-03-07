type PrimaryButtonProps = {
  onClick: () => void;
  text: string;
};

const PrimaryButton = ({ onClick, text }: PrimaryButtonProps) => {
  return (
    <button onClick={onClick} className="btn-primary">
      {text}
    </button>
  );
};

export default PrimaryButton;
