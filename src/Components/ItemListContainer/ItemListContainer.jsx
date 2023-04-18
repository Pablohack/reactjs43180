const ItemListContainer = (props) => {
  return (
    <div>
      <h1>{props.titulo}</h1>
      {props.children}
    </div>
  );
};

export default ItemListContainer;
