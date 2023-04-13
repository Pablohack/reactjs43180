import { useState } from "react";
import Titulo from "../Titulo/Titulo";
const Contador = () => {
  const [sumaleUno, setSumaleUno] = useState(0);

  const restar = () => {
    if (sumaleUno > 0) {
      setSumaleUno(sumaleUno - 1);
    }
  };

  return (
    <div>
      <Titulo titulo={sumaleUno} />
      <button onClick={() => setSumaleUno(sumaleUno + 1)}>
        Aumentar Contador
      </button>
      <button onClick={() => setSumaleUno(0)}>Reiniciar contador</button>
      <button onClick={restar}>Restar contador</button>
    </div>
  );
};

export default Contador;
