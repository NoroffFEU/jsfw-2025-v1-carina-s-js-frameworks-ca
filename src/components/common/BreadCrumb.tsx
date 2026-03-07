import type { Product } from "../../types/Product";
import { Link } from "react-router-dom";

type BreadCrumbProps = {
  product: Product;
};

const BreadCrumb = ({ product }: BreadCrumbProps) => {
  return (
    <div className="flex items-center gap-2">
      <Link to={`/`}>
        <p className="hover:font-semibold">Products</p>
      </Link>
      <span className="iconify-[material-symbols--chevron-right] text-gray-dark"></span>
      <p className="font-semibold">{product.title}</p>
    </div>
  );
};

export default BreadCrumb;
