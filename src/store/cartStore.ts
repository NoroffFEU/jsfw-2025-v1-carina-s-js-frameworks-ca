//Followed example from 2.4. Lesson - Advanced State Usage, Zustand Shopping Cart (Part 1)

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { Product } from "../types/Product";

type CartItem = {
  product: Product;
  quantity: number;
};

type CartStore = {
  items: CartItem[];
  addItem: (product: Product, qty?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
};

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
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
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
        })),

      updateQuantity: (productId, quantity) =>
        set((state) => {
          if (quantity <= 0) {
            return {
              items: state.items.filter(
                (item) => item.product.id !== productId,
              ),
            };
          } else {
            return {
              items: state.items.map((item) =>
                item.product.id === productId ? { ...item, quantity } : item,
              ),
            };
          }
        }),

      clearCart: () => set({ items: [] }),

      getTotal: () =>
        get().items.reduce(
          (sum, item) =>
            sum +
            (item.product.discountedPrice || item.product.price) *
              item.quantity,
          0,
        ),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useCartStore;
