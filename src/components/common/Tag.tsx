type Props = {
  tag: string;
};

const Tag = ({ tag }: Props) => {
  return (
    <div className="bg-primary-ultra-light rounded-sm p-2 text-sm font-medium">
      <p>{tag}</p>
    </div>
  );
};

export default Tag;
