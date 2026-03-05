import { Field, Select } from "@headlessui/react";

type SortProps = {
  onSortChange: (value: string) => void;
};

const Sort = ({ onSortChange }: SortProps) => {
  return (
    <Field>
      <Select
        name="sort"
        aria-label="Sort Products"
        defaultValue=""
        onChange={(e) => onSortChange(e.target.value)}
        className="rounded-sm py-2 font-semibold"
      >
        <option value="">Sort by Newest</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="price-asc">Price: Low to High</option>
      </Select>
    </Field>
  );
};

export default Sort;
