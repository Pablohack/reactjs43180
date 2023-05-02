import { cartIcon } from "../../assets/img";
import "./Cartwidget.css";
const Cartwidget = () => {
  return (
    <div className="cart-widget">
      <img className="cart-widget__icon" src={cartIcon} />
      <p className="cart-widget__total-shopping">1</p>
    </div>
  );
};
export default Cartwidget;
