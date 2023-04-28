import ItemDetail from "../ItemDetail";

export const ItemDetailContainer = ({ listaProductos }) => {
  console.log(listaProductos);
  return listaProductos.map((producto) => {
    return (
      <ItemDetail
        img={producto.img}
        stock={producto.stock}
        description={producto.description}
        price={producto.price}
      />
    );
  });
};
