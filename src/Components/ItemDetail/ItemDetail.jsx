import { useState } from "react";

const ItemDetail = (props) => {
  const [img, setImg] = useState("");
  const { url, name } = props;

  const getPokemon = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setImg(data.sprites["front_default"]);
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
    }
  };

  return (
    <>
      <div>
        <img src={img} width={100} height={100} />
      </div>
      <div>
        <p>{name}</p>
        <button onClick={() => getPokemon(url)}>Buscar informacion</button>
      </div>
    </>
  );
};

export default ItemDetail;
