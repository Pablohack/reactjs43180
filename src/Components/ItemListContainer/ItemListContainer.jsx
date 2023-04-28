import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer";
import mockJuegos from "../../producto.json";
import { useEffect, useState } from "react";

const ItemListContainer = () => {
  // const [product, setProduct] = useState([]);
  // const getListItem = new Promise((res, rej) => {
  //   setTimeout(() => {
  //     res(mockJuegos);
  //   }, 2000);
  // });

  // useEffect(() => {
  //   getListItem.then((res) => {
  //     setProduct(res.juegos);
  //   });
  // }, []);

  return <ItemDetailContainer listaProductos={mockJuegos.juegos} />;
};

export default ItemListContainer;
