import { useContext } from "react";
import { useLocation } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = () => {
  const { state } = useLocation();
  const { img, description, stock, price } = state;
  const { addProduct } = useContext(CartContext);

  const handlerCount = (count) => {
    addProduct(count);
  };

  return (
    <div>
      <h1>detalle del item</h1>
      <div>
        <img src={img} width={300} height={300} />
      </div>
      <div>
        <p>Descripcion: {description}</p>
      </div>
      <div>Precio: {price}</div>
      <ItemCount onChangeCount={(e) => handlerCount(e)} maxCount={stock} />
    </div>
  );
};

export default ItemDetail;
