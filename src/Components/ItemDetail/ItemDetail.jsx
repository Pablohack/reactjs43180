import { useContext } from "react";
import { useLocation } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import "./ItemDetail.css";
const ItemDetail = ({ selected }) => {
  const { state } = useLocation();
  const { img, description, stock, price } = state;
  const { addProduct } = useContext(CartContext);

  const handlerCount = (count) => {
    addProduct(count);
  };

  return (
    <div className="item-detail">
      <h1>detalle del item</h1>
      <div>
        <img src={img} width={300} height={300} />
      </div>
      <div>
        <p>Descripcion: {description}</p>
      </div>
      <div>Precio: {price}</div>
      <ItemCount
        onChangeCount={(e) => handlerCount(e)}
        maxCount={stock}
        className={"item-detail__item-count"}
      />
    </div>
  );
};

export default ItemDetail;
