import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import CartItem from "./CartItem";
import useCartStore from "../../store/cartStore";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function CartModal({ isOpen, onClose }: Props) {
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.getTotal());
  //const removeItem = useCartStore((state) => state.removeItem);
  //const updateQuantity = useCartStore((state) => state.updateQuantity);

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          static
          open={isOpen}
          onClose={onClose}
          className="relative z-50"
        >
          <DialogBackdrop
            className="fixed inset-0 bg-black/30"
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 flex w-full items-center justify-end overflow-y-auto"
          >
            <DialogPanel className="min-h-full w-[90%] max-w-145 space-y-4 rounded-sm bg-white p-4 sm:p-8">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <DialogTitle className="text-2xl font-bold">
                    Your Cart
                  </DialogTitle>
                  <button
                    className="btn-round flex items-center justify-center"
                    onClick={onClose}
                  >
                    <span className="iconify-[material-symbols--close]"></span>
                  </button>
                </div>
                <hr className="text-gray-medium" />
              </div>
              <div>
                {items.map((item) => (
                  <CartItem key={item.product.id} product={item.product} />
                ))}
              </div>
              <div className="bg-secondary-ultra-light border-secondary text-gray-dark flex flex-col gap-4 rounded-sm border p-4 md:text-lg">
                <div className="flex items-center justify-between">
                  <p>Shipping:</p>
                  <div className="flex items-center gap-2">
                    <span className="iconify-[material-symbols--check]"></span>
                    <p>Free</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <p>Amount:</p>
                  <p>2 380 NOK</p>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex justify-between text-lg font-semibold md:text-2xl">
                  <p>Total</p>
                  <p>{total}</p>
                </div>
                <button className="btn-primary" onClick={onClose}>
                  One-Click Checkout
                </button>
              </div>
            </DialogPanel>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}

export default CartModal;
