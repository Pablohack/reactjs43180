import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import mockJuegos from "../../producto.json";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { getCollection } from "../../utils/getFirestore";

const ItemListContainer = () => {
  const [product, setProduct] = useState([]);
  const { categoryId } = useParams();

  const getListItem = () => {
    getCollection("items").then((result) => {
      console.log(result);
      setProduct(result);
    });
  };
  useEffect(() => {
    getListItem();
  }, []);
  // useEffect(() => {
  //   getListItem.then((res) => {
  //     const producto = res.juegos;
  //     if (categoryId) {
  //       const productoFiltrado = producto.filter(
  //         (prod) => prod.category == categoryId || categoryId == 0
  //       );
  //       setProduct(productoFiltrado);
  //       return;
  //     }
  //     setProduct(producto);
  //   });
  // }, [categoryId]);

  return product.length > 0 ? (
    <ItemList listaProductos={product} />
  ) : (
    <Spinner className="spinner" />
  );
};
export default ItemListContainer;
