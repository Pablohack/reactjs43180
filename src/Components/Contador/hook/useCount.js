import { useState } from "react";

export const useCount = (initial = 0, min, max) => {
  if (initial < min || initial > max) initial = min;
  const [count, setCount] = useState(initial);

  const reset = () => {
    setCount(initial);
  };

  const increment = () => {
    if (count < max) setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count > min) setCount((prev) => prev - 1);
  };

  return { count, reset, increment, decrement };
};
