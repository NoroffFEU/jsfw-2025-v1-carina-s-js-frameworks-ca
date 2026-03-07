export type Variant = "full" | "half" | "empty";

type StarProps = {
  variant: Variant;
};

const Star = ({ variant }: StarProps) => {
  if (variant === "full") {
    return (
      <span className="iconify-[material-symbols--star-rate] text-primary-dark"></span>
    );
  }

  if (variant === "half") {
    return (
      <span className="iconify-[material-symbols--star-rate-half] text-primary-dark"></span>
    );
  }

  return (
    <span className="iconify-[material-symbols--star-rate-outline] text-primary-dark"></span>
  );
};

export default Star;
