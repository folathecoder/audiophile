import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.number().integer().required(),
  address: yup.string().required(),
  zipCode: yup.number().integer().min(5).required(),
  city: yup.string().required(),
  country: yup.string().required(),
  // emoneyNumber: yup.number().integer().notRequired(),
  // emoneyPin: yup.number().integer().notRequired(),
});
