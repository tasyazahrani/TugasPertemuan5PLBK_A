import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

function cartReducer(state, action) {

  switch (action.type) {

    case "ADD_ITEM": {

      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );

      let newItems;

      if (existing) {
        newItems = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newItems = [...state.items, { ...action.payload, quantity: 1 }];
      }

      return {
        items: newItems,
        totalItems: newItems.reduce((sum, i) => sum + i.quantity, 0),
        totalPrice: newItems.reduce(
          (sum, i) => sum + i.price * i.quantity,
          0
        ),
      };
    }

    case "REMOVE_ITEM": {

      const newItems = state.items
        .map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

      return {
        items: newItems,
        totalItems: newItems.reduce((sum, i) => sum + i.quantity, 0),
        totalPrice: newItems.reduce(
          (sum, i) => sum + i.price * i.quantity,
          0
        ),
      };
    }

    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
}

export function CartProvider({ children }) {

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        totalItems: state.totalItems,
        totalPrice: state.totalPrice,
        addItem,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);