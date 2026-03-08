import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

function CartModal({ isOpen, onClose }: Props) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 flex w-full items-center justify-end">
        <DialogPanel className="h-full w-[90%] max-w-145 space-y-4 rounded-sm bg-white p-4 sm:p-8">
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
            <p>This is an item</p>
          </div>
          <div>
            <div className="flex justify-between font-semibold">
              <p>Total</p>
              <p>5 600 NOK</p>
            </div>
            <button className="btn-primary" onClick={onClose}>
              One-Click Checkout
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default CartModal;
