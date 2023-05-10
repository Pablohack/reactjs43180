import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import mockJuegos from "../../producto.json";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [product, setProduct] = useState([]);
  const { categoryId } = useParams();

  const getListItem = new Promise((res, rej) => {
    setTimeout(() => {
      res(mockJuegos);
    }, 2000);
  });

  useEffect(() => {
    getListItem.then((res) => {
      const producto = res.juegos;

      if (categoryId != 0) {
        const productoFiltrado = producto.filter(
          (prod) => prod.category == categoryId
        );
        setProduct(productoFiltrado);
      } else {
        setProduct(producto);
      }
    });
  }, [categoryId]);
  console.log(product);
  return product.length > 0 ? (
    <ItemList listaProductos={product} />
  ) : (
    <Spinner animation="grow" />
  );
};

export default ItemListContainer;
