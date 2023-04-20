import { useEffect, useRef, useState } from "react";
import Titulo from "../Titulo/Titulo";
const Contador = () => {
  const [contador, setContador] = useState(0);
  const [color, setColor] = useState();

  useEffect(() => {
    if (contador > 5) setColor("blue");
    if (contador < 5) setColor("red");
  }, [contador]);

  return (
    <div>
      <h1 style={{ color: color }}>{contador}</h1>
      <button onClick={() => setContador(contador + 1)}>
        Aumentar Contador
      </button>
      <button onClick={() => setContador(0)}>Reiniciar contador</button>
      <button onClick={() => setContador(contador - 1)}>Restar contador</button>
    </div>
  );
};

export default Contador;
