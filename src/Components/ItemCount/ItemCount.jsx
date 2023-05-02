import Button from "react-bootstrap/Button";
import "./ItemCount.css";
import { useCount } from "./hook/useCount";
const ItemCount = () => {
  const { count, decrement, increment } = useCount(1, 0, 10);

  return (
    <div className="item-count">
      <div className="item-count__container-button">
        <Button
          className="item-count__container-button__btn"
          variant="outline-dark"
          size="sm"
          onClick={increment}>
          +
        </Button>
        <p className="item-count__container__text">{count}</p>
        <Button
          className="item-count__container-button__btn"
          variant="outline-dark"
          size="sm"
          onClick={decrement}>
          -
        </Button>
      </div>
      <div className="item-count__container-add-cart">
        <Button
          className="item-count__container-add-cart__btn"
          variant="outline-dark"
          size="sm">
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
