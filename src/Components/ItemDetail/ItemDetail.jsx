import { useState } from "react";
import { useLocation } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = () => {
  const { state } = useLocation();
  const { img, description, stock, price } = state;
  const [changeCount, setChangeCount] = useState("button");
  const handlerChangeCount = () => {
    setChangeCount("select");
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
      <input
        type="button"
        value="cambiar contador"
        onClick={handlerChangeCount}
      />
      <ItemCount type={changeCount} maxCount={stock} />
    </div>
  );
};

export default ItemDetail;
