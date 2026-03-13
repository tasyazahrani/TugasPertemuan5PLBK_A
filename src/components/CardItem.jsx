import { useCart } from "../context/CartContext";

export default function CardItem({ item }) {

  const { addItem, removeItem } = useCart();

  return (
    <div className="cart-item">

      <img
        src={item.image}
        alt={item.title}
        width="70"
      />

      <div>

        <h4>{item.title}</h4>

        <p>${item.price}</p>

        <div className="qty">

          <button onClick={() => removeItem(item.id)}>
            -
          </button>

          {item.quantity}

          <button onClick={() => addItem(item)}>
            +
          </button>

        </div>

      </div>

    </div>
  );
}