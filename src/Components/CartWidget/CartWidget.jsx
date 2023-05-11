import { useContext } from "react";
import { cartIcon } from "../../assets/img";
import { CartContext } from "../../context/CartContext";
import "./cartwidget.css";

const Cartwidget = () => {
  const { AddProductCart } = useContext(CartContext);

  console.log(AddProductCart);
  return (
    <div className="cart-widget">
      <img className="cart-widget__icon" src={cartIcon} />
      <p className="cart-widget__total-shopping">{AddProductCart}</p>
    </div>
  );
};
export default Cartwidget;
