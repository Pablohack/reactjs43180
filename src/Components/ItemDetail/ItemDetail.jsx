import { useContext } from "react";
import { useLocation } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import "./ItemDetail.css";
import { createOrder, updateOrder } from "../../utils/createUpdatedFirestore";

const ItemDetail = ({ selected }) => {
  const { state } = useLocation();
  const { image, Description, stock, price, title, id } = state;
  const { addProduct } = useContext(CartContext);

  const handlerCount = (count) => {
    addProduct(count);
  };

  const handlerAddCart = (count) => {
    const item = {
      name: title,
      price: price,
      total: count,
    };
    createOrder(item).then((result) => {
      alert(result);
      console.log(result);
    });
  };

  const handlerUpdateCart = (count) => {
    updateOrder(id, count);
  };

  return (
    <div className="item-detail">
      <h1>{title}</h1>
      <div>
        <img src={image} width={300} height={300} />
      </div>
      <div>
        <p>Descripcion: {Description}</p>
      </div>
      <div>Precio: {price}</div>
      <ItemCount
        onChangeCount={(e) => handlerCount(e)}
        onClickAddCart={(e) => handlerAddCart(e)}
        onClickUpdateCart={(e) => handlerUpdateCart(e)}
        maxCount={stock}
        className={"item-detail__item-count"}
      />
    </div>
  );
};

export default ItemDetail;
