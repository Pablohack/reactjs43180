import Titulo from "../Titulo";

const Lista = (todoList) => {
  const { lista } = todoList;
  return (
    <div>
      {lista.map((list) => {
        return <h2>{list.task}</h2>;
      })}
    </div>
  );
};

export default Lista;
