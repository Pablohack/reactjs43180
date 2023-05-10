import { Item } from "../Item";
import "./ItemList.css";
export const ItemList = ({ listaProductos }) => {
  return (
    <div className="item-list">
      {listaProductos.map((producto) => {
        return (
          <Item
            key={producto.img}
            img={producto.img}
            stock={producto.stock}
            description={producto.description}
            price={producto.price}
            title={producto.title}
          />
        );
      })}
    </div>
  );
};
