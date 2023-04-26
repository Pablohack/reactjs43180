import ItemDetail from "../ItemDetail";
const ItemListContainer = (props) => {
  const { listPokemon } = props;
  return (
    <>
      {listPokemon.map((item) => {
        return <ItemDetail {...item} />;
      })}
    </>
  );
};

export default ItemListContainer;
