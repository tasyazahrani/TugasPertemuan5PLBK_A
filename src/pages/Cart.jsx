import { useCart } from "../context/CartContext";

export default function Cart() {

  const { items, totalPrice, addItem, removeItem, clearCart } = useCart();

  if (items.length === 0) {
    return <h2 style={{ padding: "2rem" }}>Keranjang Kosong</h2>;
  }

  return (
    <div style={{ padding: "2rem" }}>

      <h2>Keranjang</h2>

      {items.map((item) => (

        <div className="cart-item" key={item.id}>

          <img src={item.image} alt={item.title} />

          <div>
            <h4>{item.title}</h4>

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

      ))}

      <h3>Total: ${totalPrice.toFixed(2)}</h3>

      <button onClick={clearCart}>
        Checkout
      </button>

    </div>
  );
}