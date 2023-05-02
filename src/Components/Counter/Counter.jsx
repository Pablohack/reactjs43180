import Titulo from "../Titulo/Titulo";
import { useCount } from "./hook/useCount";
const Counter = () => {
  const { count, decrement, increment, reset } = useCount(1, 0, 10);

  return (
    <div>
      <Titulo titulo={count} />
      <button onClick={increment}>+</button>
      <button onClick={reset}>reset</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
