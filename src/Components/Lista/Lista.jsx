import Titulo from "../Titulo";

const Lista = (todoList) => {
  const { props, isGreen } = todoList;
  return (
    <div>
      <Titulo titulo="Estamos con componente titulo" />
      {props.map((list) => {
        return (
          <h1 style={isGreen ? { color: "green", fontSize: 14 } : null}>
            {list}
          </h1>
        );
      })}
    </div>
  );
};

export default Lista;
