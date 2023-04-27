const { useState } = require("react");

export const withFormValidation = (WrappedComponent) => {
  const WithFormaValidation = (props) => {
    const [errors, setErrors] = useState({});

    const validationForm = () => {
      const newErrors = {};
      if (!props.formData.nombre) {
        newErrors.nombre = "El nombre es requerido";
      }
      if (!props.formData.email) {
        newErrors.email = "El email es requerido";
      }
      if (!props.formData.numero) {
        newErrors.numero = "El numero es requerido";
      }
      setErrors(newErrors);
    };

    return (
      <WrappedComponent
        {...props}
        errors={errors}
        validateForm={validationForm}
      />
    );
  };
  return WithFormaValidation;
};
