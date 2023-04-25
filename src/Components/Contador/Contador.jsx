import { useEffect, useRef, useState } from "react";
import Titulo from "../Titulo/Titulo";
const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <Titulo titulo={contador} />
      <button onClick={() => setContador(contador + 1)}>
        Aumentar Contador
      </button>
      <button onClick={() => setContador(0)}>Reiniciar contador</button>
      <button onClick={() => setContador(contador - 1)}>Restar contador</button>
    </div>
  );
};

export default Contador;
