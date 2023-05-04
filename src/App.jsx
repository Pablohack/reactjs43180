import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./Components/ItemListContainer";
import { NavBar } from "./Components/Navbar/";
import ItemDetailContainer from "./Components/ItemDetail";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
