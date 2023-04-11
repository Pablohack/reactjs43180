import "./App.css";
import Lista from "./Components/Lista";
function App() {
  const todoList = ["Estudiar", "Pasear al perro", "Dormir"];
  return (
    <div className="App">
      <header className="App-header">
        <h1>Este es el componente Padre</h1>
        <Lista props={todoList} isGreen={true} />
      </header>
    </div>
  );
}

export default App;
