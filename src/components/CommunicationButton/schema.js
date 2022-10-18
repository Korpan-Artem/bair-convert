import * as Yup from "yup";

const validationSchemaServiceForm = Yup.object().shape({
  name: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
});

export default validationSchemaServiceForm ;