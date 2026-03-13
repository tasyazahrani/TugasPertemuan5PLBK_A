import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {

  const { addItem } = useCart();

  return (
    <div className="product-card">

      <Link to={`/product/${product.id}`}>

        <img src={product.image} alt={product.title} />

        <h4>{product.title}</h4>

      </Link>

      <p>${product.price}</p>

      <button onClick={() => addItem(product)}>
        Add to Cart
      </button>

    </div>
  );
}