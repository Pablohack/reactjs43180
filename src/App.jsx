import "./App.css";
import Contador from "./Components/Contador/Contador";
import Lista from "./Components/Lista";
import Titulo from "./Components/Titulo";
import NavBar from "./Components/Navbar/";
import ItemListContainer from "./Components/ItemListContainer";

function App() {
  const ListaTodo = ["Lavar loza", "Cocinar", "Tender cama", "Limpiar baños"];
  const listaTodo2 = [
    { id: 1, task: "lavar loza" },
    // { id: 2, task: "lavar ropa" },
  ];
  return (
    <div className="">
      <header className="App-header">
        <NavBar />
        <ItemListContainer titulo="Lista que hacer">
          <Lista lista={listaTodo2} />
        </ItemListContainer>
      </header>
    </div>
  );
}

export default App;
