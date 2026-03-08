import { motion } from "framer-motion";

const ProductCardSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      role="status"
      className="shadow-card flex w-full animate-pulse flex-col overflow-hidden rounded-sm"
    >
      <div className="bg-gray-medium h-70 rounded-sm"></div>
      <div className="flex flex-col gap-4 bg-white p-6">
        <div className="bg-gray-medium mb-2.5 h-3 w-50 rounded-full"></div>
        <div className="bg-gray-medium mb-2.5 h-3 w-40 rounded-full"></div>
        <div className="bg-gray-medium mb-2 h-4 w-30 rounded-full"></div>
        <div className="bg-gray-medium mb-2.5 h-2 w-20 rounded-full"></div>
      </div>
    </motion.div>
  );
};

export default ProductCardSkeleton;
