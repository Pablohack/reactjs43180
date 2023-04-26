import { useState } from "react";
import "./App.css";
import Contador from "./Components/Contador/Contador";
import Lista from "./Components/Lista";
import Titulo from "./Components/Titulo";
import NavBar from "./Components/Navbar/";
import ItemListContainer from "./Components/ItemListContainer";
import { useEffect } from "react";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error("Error fetching Pokemon:", error);
      }
    }

    fetchData();
  }, []);

  console.log(pokemonList);

  return (
    <div className="">
      <header className="App-header">
        <NavBar />
        <ItemListContainer listPokemon={pokemonList} />
      </header>
    </div>
  );
}

export default App;
