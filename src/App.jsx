import "./App.css";
import Lista from "./Components/Lista";
function App() {
  const todoList = ["Estudiar", "Pasear al perro", "Dormir"];
  console.log([...todoList]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Este es el componente Padre</h1>
        <Lista props={todoList} />
      </header>
    </div>
  );
}

export default App;
