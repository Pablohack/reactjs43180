import { useEffect, useRef, useState } from "react";
import Titulo from "../Titulo/Titulo";
const Contador = () => {
  const [contador, setContador] = useState(0);
  const stock = 5;

  const onAdd = () => {
    if (stock < contador) {
      alert("No tiene stock suficiente");
    } else {
      alert("Agregado al carrito");
    }
  };

  return (
    <div>
      <Titulo titulo={contador} />
      <button onClick={() => setContador(contador + 1)}>
        Aumentar Contador
      </button>
      <button onClick={() => setContador(0)}>Reiniciar contador</button>
      <button onClick={() => setContador(contador - 1)}>Restar contador</button>
      <button onClick={onAdd}>Agregar al carrito de compras</button>
    </div>
  );
};

export default Contador;
