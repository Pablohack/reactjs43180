import "./App.css";
import Contador from "./Components/Contador/Contador";
import Lista from "./Components/Lista";
import Titulo from "./Components/Titulo";
function App() {
  const todoList = ["Estudiar", "Pasear al perro", "Dormir"];
  return (
    <div className="App">
      <header className="App-header">
        <Titulo titulo="Manejaremos el estado del componente contador" />
        <Contador />
        {/* <Lista props={todoList} isGreen={true} /> */}
      </header>
    </div>
  );
}

export default App;
