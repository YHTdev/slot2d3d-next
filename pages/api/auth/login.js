import { withValidation } from "next-validations";
import * as yup from "yup";
import { loginUser } from "../../../lib/controllers/user";

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
});
const validate = withValidation({
  schema,
  type: "Yup",
  mode: "body",
});

const handler = async (req, res) => {
  if (req.method === "POST") {
    const response = await loginUser(req, res);

    res.json(response);
  }
};

export default validate(handler);
