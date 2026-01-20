import { useState } from "react";
import { IconCart } from "../assets/images/images";
import { useCart } from "../hooks/useCart";

type AddToCartProps = {
  cartItem: {
    id: string;
    name: string;
    price: number;
    discount: number;
    image: string;
  };
};

export default function AddToCart({ cartItem }: AddToCartProps) {
  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount((pre) => pre + 1);
  }
  function decreaseCount() {
    if (count == 0) return;
    setCount((pre) => pre - 1);
  }
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 mt-2">
      <div className="flex gap-2 bg-gray-200 justify-center px-2 py-2 rounded-lg items-center">
        <button
          onClick={decreaseCount}
          className="font-bold text-3xl text-orange-400  hover:text-orange-300 active:text-orange-400"
        >
          -
        </button>
        <span className="px-6 font-bold">{count}</span>
        <button
          onClick={increaseCount}
          className="font-bold text-3xl text-orange-400  hover:text-orange-300 active:text-orange-400"
        >
          +
        </button>
      </div>
      <button
        onClick={() => addToCart({ ...cartItem, count })}
        className="flex-1 flex items-center justify-center gap-2 text-black bg-orange-400 font-bold py-4 rounded-md hover:bg-orange-300 active:bg-orange-400"
      >
        <img src={IconCart} />
        Add to cart
      </button>
    </div>
  );
}
