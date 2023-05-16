import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import mockJuegos from "../../producto.json";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [product, setProduct] = useState([]);
  const { categoryId } = useParams();

  const getListItem = new Promise((res, rej) => {
    setTimeout(() => {
      res(mockJuegos);
    }, 5000);
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

  return product.length > 0 ? (
    <ItemList listaProductos={product} />
  ) : (
    <Spinner className="spinner" />
  );
};
export default ItemListContainer;
