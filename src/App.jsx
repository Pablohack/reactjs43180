import "./App.css";
import { NavBar } from "./Components/Navbar/";
import ItemListContainer from "./Components/ItemListContainer";

function App() {
  return (
    <div className="">
      <header className="App-header">
        <NavBar />
        <ItemListContainer />
      </header>
    </div>
  );
}

export default App;
