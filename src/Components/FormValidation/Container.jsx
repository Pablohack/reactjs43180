import { useState } from "react";
import { withFormValidation } from "./WithFormValidation";
import { Form } from "./Form";

const FormWithValidation = withFormValidation(Form);

const Container = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    numero: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div>
      <FormWithValidation formData={formData} onChange={handleChange} />
    </div>
  );
};

export default Container;
