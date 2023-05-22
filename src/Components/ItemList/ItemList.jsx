import { Item } from "../Item";
import "./ItemList.css";
export const ItemList = ({ listaProductos }) => {
  console.log(listaProductos);
  return (
    <div className="item-list">
      {listaProductos.map((producto) => {
        return (
          <Item
            key={producto.id}
            id={producto.id}
            image={producto.image}
            stock={producto.stock}
            Description={producto.Description}
            price={producto.price}
            title={producto.title}
          />
        );
      })}
    </div>
  );
};
