import { createUser } from "../../../../lib/controllers/user";
import { withValidation } from "next-validations";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
  nrc: yup.string().required().min(12),
  bio: yup.string().notRequired().max(200),
  address: yup.string().notRequired(),
  phone: yup.string().required(),
});
const validate = withValidation({
  schema,
  type: "Yup",
  mode: "body",
});

const handler = (req, res) => {
  if (req.method === "POST") {
    const response = createUser(req, res);
    res.json(response);
  }
};

export default validate(handler);
