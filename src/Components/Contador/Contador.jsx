import { useEffect, useRef, useState } from "react";
import Titulo from "../Titulo/Titulo";
const Contador = () => {
  const [contador, setContador] = useState(0);
  const [show, setShow] = useState(false);

  const MostrarContador = () => setShow(true);
  const OcultarContador = () => setShow(false);

  useEffect(() => {
    alert("Se activo useEffect show");
  }, [show]);

  useEffect(() => {
    if (contador < 0) {
      alert("No puede ser numero negativo");
    }
  }, [contador]);

  return (
    <div>
      {show && <Titulo titulo={contador} />}
      <button onClick={() => setContador(contador + 1)}>
        Aumentar Contador
      </button>
      <button onClick={() => setContador(0)}>Reiniciar contador</button>
      <button onClick={() => setContador(contador - 1)}>Restar contador</button>
      <button onClick={MostrarContador}>Mostrar Contador</button>
      <button onClick={OcultarContador}>Ocultar Contador</button>
    </div>
  );
};

export default Contador;
