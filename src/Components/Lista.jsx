const Lista = (todoList) => {
  const { props } = todoList;
  return (
    <div>
      <h1>Componte Hijo</h1>
      {props.map((list) => {
        return <h1>{list}</h1>;
      })}
    </div>
  );
};

export default Lista;
