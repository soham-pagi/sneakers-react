import { Link } from "react-router";
import { useCart } from "../hooks/useCart";
import { IconDelete } from "../assets/images/images";

type CartProps = {
  className?: string;
};

export default function Cart({ className }: CartProps) {
  const { cartItems, removeFromCart } = useCart();
  return (
    <div className={`flex flex-col justify-center ${className}`}>
      <div className="p-5 border-b border-slate-200">
        <h4 className="font-bold text-slate-900">Cart</h4>
      </div>

      <div
        className={`flex-1 flex flex-col${cartItems.length === 0 ? " justify-center items-center" : ""}`}
      >
        {cartItems.length === 0 ? (
          <p className="font-semibold">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col gap-2 mt-2">
            {cartItems.map((item) => (
              <div className="flex justify-between items-center gap-4 w-full">
                <img width={45} className="rounded-md" src={item.image} />
                <div>
                  <Link to={""}>
                    <p>{item.name}</p>
                  </Link>
                  <p>
                    {`$${((item.price * item.discount) / 100).toFixed(2)} × ${item.count} `}
                    <span className="font-bold">{`$${(((item.price * item.discount) / 100) * item.count).toFixed(2)}`}</span>
                  </p>
                </div>
                <img onClick={() => removeFromCart(item.id)} src={IconDelete} />
              </div>
            ))}
          </div>
        )}
        {!!cartItems.length && (
          <Link
            to={"/checkout"}
            className="text-center mt-auto bg-orange-400 rounded-md w-full py-3 px-4 font-bold"
          >
            Checkout
          </Link>
        )}
      </div>
    </div>
  );
}
