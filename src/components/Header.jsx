import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {

  const { totalItems } = useCart();

  return (
    <header className="header">

      <h2>MiniShop</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">
          Cart ({totalItems})
        </Link>
      </nav>

    </header>
  );
}