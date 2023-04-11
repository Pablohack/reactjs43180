Array.prototype.MapRetrocompatibleCoderHouse = function (calbackFN) {
  var arreglo = [];
  for (var i = 0; i < this.length; i = i + 1) {
    arreglo.push(calbackFN(this[i], i, this));
  }
  return arreglo;
};

const Lista = (todoList) => {
  const { props, isGreen } = todoList;
  return (
    <div>
      <h1>Componte Hijo</h1>
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
