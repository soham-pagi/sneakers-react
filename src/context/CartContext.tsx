import { createContext } from "react";

export type CartItem = {
  id: string;
  count: number;
  name: string;
  price: number;
  discount: number;
  image: string;
};

export type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  totalItems: number;
};

export const CartContext = createContext<CartContextType | null>(null);
