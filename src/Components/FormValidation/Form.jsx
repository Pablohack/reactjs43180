export const Form = ({ formData, errors, validateForm, onChange }) => {
  function handleSubmit(event) {
    event.preventDefault();
    validateForm && validateForm();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={(e) => onChange(e)}
        />
        {/* error != undefined o null || errors.nombre != undefined o null*/}
        {errors && errors.nombre && <div>{errors.nombre}</div>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={(e) => onChange(e)}
        />
        {errors && errors.email && <div>{errors.email}</div>}
      </div>
      <div>
        <label>Numero</label>
        <input
          type="text"
          name="numero"
          value={formData.numero}
          onChange={(e) => onChange(e)}
        />
        {errors && errors.numero && <div>{errors.numero}</div>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};
