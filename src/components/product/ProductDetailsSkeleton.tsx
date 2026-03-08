import { motion } from "framer-motion";

const ProductDetailsSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex-start flex w-full flex-col p-4 sm:p-0 md:pb-8"
    >
      <div
        role="status"
        className="shadow-card mt-6 flex animate-pulse flex-col overflow-hidden rounded-sm py-4 md:flex-row md:gap-8"
      >
        <div className="bg-gray-medium aspect-4/3 h-108 w-full max-w-145 rounded-sm object-cover"></div>
        <div className="flex max-w-145 flex-col gap-4 py-8 md:py-0">
          <div className="bg-gray-medium mb-2 h-5 w-40 rounded-full"></div>
          <div className="bg-gray-medium mb-2.5 h-3 w-30 rounded-full"></div>
          <div className="bg-gray-medium mb-2.5 h-5 w-20 rounded-full"></div>
          <div className="bg-gray-medium mb-2.5 h-3 w-60 rounded-full"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetailsSkeleton;
