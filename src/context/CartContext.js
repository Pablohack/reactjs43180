import { createContext, useReducer } from "react";
import { cartReducer } from "./CartReducer";

export const CartContext = createContext(null);

// declaracion estado global
const stateGlobal = { AddProductCart: 0 };

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, stateGlobal);

  function addProduct(AddProductCart) {
    console.log("cartcontext", AddProductCart);
    dispatch({
      type: "AGREGAR",
      payload: { AddProductCart },
    });
  }

  return (
    <CartContext.Provider
      value={{ AddProductCart: state.AddProductCart, addProduct }}>
      {children}
    </CartContext.Provider>
  );
};
