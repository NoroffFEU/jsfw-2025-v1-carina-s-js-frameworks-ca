//Followed example from 2.4. Lesson - Advanced State Usage, Zustand Shopping Cart (Part 1)

import { create } from "zustand";
import type { Product } from "../types/Product";

type CartItem = {
  product: Product;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  addItem: (product: Product, qty?: number) => void;
  removeItem: (productId: string) => void;
  getTotal: () => number;
};

const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addItem: (product) =>
    set((state) => {
      const existingItem = state.items.find(
        (item) => item.product.id === product.id,
      );

      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
        return { items: updatedItems };
      } else {
        const newItem: CartItem = { product, quantity: 1 };
        const updatedItems = [...state.items, newItem];
        return { items: updatedItems };
      }
    }),

  removeItem: (productId) =>
    set((state) => {
      const updatedItems = state.items.filter(
        (item) => item.product.id !== productId,
      );
      return { items: updatedItems };
    }),

  updateQuantity: (productId: string, quantity: number) =>
    set((state) => {
      if (quantity <= 0) {
        const updatedItems = state.items.filter(
          (item) => item.product.id !== productId,
        );
        return { items: updatedItems };
      } else {
        const updatedItems = state.items.map((item) =>
          item.product.id === productId
            ? { ...item, quantity: quantity }
            : item,
        );
        return { items: updatedItems };
      }
    }),

  clearCart: () => set({ items: [] }),

  getTotal: () =>
    get().items.reduce(
      (sum, item) =>
        sum +
        (item.product.discountedPrice || item.product.price) * item.quantity,
      0,
    ),
}));

export default useCartStore;
