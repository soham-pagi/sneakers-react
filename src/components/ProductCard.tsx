import { useState } from "react";
import AddToCart from "./AddToCart";

type ProductCardProps = {
  product: {
    id: string;
    name: string;
    brand: string;
    description: string;
    price: number;
    discount: number;
    images: {
      main: string;
      thumbnail: string;
    }[];
  };
};

export default function ProductCard({ product }: ProductCardProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="md:mt-20">
      <div className="grid center justify-items-center items-center md:grid-cols-2">
        <div className="md:max-w-120">
          <img
            className="md:w-full md:rounded-lg mx-auto"
            src={product.images[selectedImage].main}
          />

          <div className="hidden md:flex md:mt-5 md:justify-between">
            {product.images.map((image, index) => (
              <button
                key={image.thumbnail}
                className="cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  width={96}
                  className={`w-24 rounded-lg border-2 transition-all ${selectedImage === index ? "border-2 border-orange-400" : "border-transparent opacity-60"}`}
                  src={image.thumbnail}
                  alt={"product thumbnail"}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 md:max-w-120">
          <h6 className="font-bold text-black/50 tracking-wide">
            {product.brand}
          </h6>
          <h2 className="py-3 font-bold text-4xl">{product.name}</h2>
          <p className="py-5 text-black/80 text-md tracking-wide">
            {product.description}
          </p>

          <div className="font-bold text-3xl flex items-center gap-4">
            ${((product.price * product.discount) / 100).toFixed(2)}
            <span className="bg-black text-white text-sm px-2 py-1 rounded-lg">
              {product.discount}%
            </span>
          </div>
          <div className="line-through text-black/50 text-xl font-bold">
            ${product.price}
          </div>

          {/* Add to cart */}
          <AddToCart
            cartItem={{
              id: product.id,
              name: product.name,
              price: product.price,
              discount: product.discount,
              image: product.images[0].main,
            }}
          />
        </div>
      </div>
    </div>
  );
}
