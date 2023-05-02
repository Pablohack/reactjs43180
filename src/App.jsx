import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { NavBar } from "./Components/Navbar/";
import ItemListContainer from "./Components/ItemListContainer";
import ItemCount from "./Components/ItemCount";

function App() {
  return (
    <>
      <header className="App-header">
        <NavBar />
      </header>
      <body>
        <ItemListContainer />
      </body>
    </>
  );
}

export default App;
