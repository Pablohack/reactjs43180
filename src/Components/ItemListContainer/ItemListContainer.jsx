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
    }, 100);
  });

  useEffect(() => {
    getListItem.then((res) => {
      const producto = res.juegos;
      if (categoryId) {
        const productoFiltrado = producto.filter(
          (prod) => prod.category == categoryId || categoryId == 0
        );
        setProduct(productoFiltrado);
        return;
      }
      setProduct(producto);
    });
  }, [categoryId]);

  return product.length > 0 ? (
    <ItemList listaProductos={product} />
  ) : (
    <Spinner className="spinner" />
  );
};
export default ItemListContainer;
