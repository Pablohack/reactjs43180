import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import mockJuegos from "../../producto.json";
import Spinner from "react-bootstrap/Spinner";

const ItemListContainer = () => {
  const [product, setProduct] = useState([]);
  const getListItem = new Promise((res, rej) => {
    setTimeout(() => {
      res(mockJuegos);
    }, 2000);
  });

  useEffect(() => {
    getListItem.then((res) => {
      setProduct(res.juegos);
    });
  }, []);

  return product.length > 0 ? (
    <ItemList listaProductos={product} />
  ) : (
    <Spinner animation="grow" />
  );
};

export default ItemListContainer;
