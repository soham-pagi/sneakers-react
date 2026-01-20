import {
  Product1,
  Product1Thumbnail,
  Product2,
  Product2Thumbnail,
  Product3,
  Product3Thumbnail,
  Product4,
  Product4Thumbnail,
} from "../assets/images/images";
import ProductCard from "../components/ProductCard";

const product = {
  id: "p1",
  name: "Fall Limited Edition Sneakers",
  brand: "SNEAKER COMPANY",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  price: 250.0,
  discount: 50,
  images: [
    { main: Product1, thumbnail: Product1Thumbnail },
    { main: Product2, thumbnail: Product2Thumbnail },
    { main: Product3, thumbnail: Product3Thumbnail },
    { main: Product4, thumbnail: Product4Thumbnail },
  ],
};

export default function WomenPage() {
  return (
    <section>
      <ProductCard product={product} />
    </section>
  );
}
