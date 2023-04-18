import "./App.css";
import Contador from "./Components/Contador/Contador";
import Lista from "./Components/Lista";
import Titulo from "./Components/Titulo";
import NavBar from "./Components/Navbar/";
import ItemListContainer from "./Components/ItemListContainer";

function App() {
  return (
    <div className="">
      <header className="App-header">
        <NavBar />
        <ItemListContainer titulo="Esto es un titulo en itemlistcontainer">
          <Contador />
        </ItemListContainer>
      </header>
    </div>
  );
}

export default App;
