import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Titulo = () => {
  const { cualquiercosa } = useParams();
  const [params, setParams] = useState(cualquiercosa);

  useEffect(() => {
    setParams(cualquiercosa);
  }, [cualquiercosa]);

  return (
    <>
      <h1>Es un componente de prueba para navegacion</h1>
      <h3>Este el id de nuestra categoria {params}</h3>
    </>
  );
};
export default Titulo;
