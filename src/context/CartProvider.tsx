import { useState, type ReactNode } from "react";
import { CartContext, type CartItem } from "./CartContext";

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function addToCart(newItem: CartItem) {
    if (newItem.count === 0) return;

    setCartItems((prev) => {
      const existing = prev.find((item) => newItem.id === item.id);
      if (existing) {
        return prev.map((item) =>
          item.id === newItem.id
            ? { ...item, count: item.count + newItem.count }
            : item,
        );
      }

      return [...prev, { ...newItem, count: newItem.count }];
    });
  }

  function removeFromCart(id: string) {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === id);

      if (!existing) return prev;

      if (existing.count === 1) return prev.filter((item) => item.id !== id);

      return prev.map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item,
      );
    });
  }

  const totalItems = cartItems.reduce((acc, item) => acc + item.count, 0);

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    totalItems,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
