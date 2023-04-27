import "./App.css";
import Contador from "./Components/Contador/Contador";
import { NavBar } from "./Components/Navbar/";
import Formulario from "./Components/FormValidation/Container";

function App() {
  return (
    <div className="">
      <header className="App-header">
        <NavBar />
        {/* <Contador /> */}
        <Formulario />
      </header>
    </div>
  );
}

export default App;
