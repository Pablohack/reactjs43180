import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";
import ItemListContainer from "./Components/ItemListContainer";
import { NavBar } from "./Components/Navbar/";
import ItemDetailContainer from "./Components/ItemDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import { getCollection, getDocument } from "./utils/getFirestore";

function App() {
  const [categoria, setCategoria] = useState();

  useEffect(() => {
    getCollection("categorias").then((result) => {
      setCategoria(result);
    });
  }, []);

  return (
    <BrowserRouter>
      {categoria ? <NavBar category={categoria} /> : null}
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route
          path="/item/:itemId"
          element={<ItemDetailContainer selected={true} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
