import { withValidation } from "next-validations";
import * as yup from "yup";
import { createUser } from "../../../../Controllers/Users";

const schema = yup.object().shape({
  phone: yup.string().required(),
  password: yup.string().min(8).required(),
  name: yup.string().required(),
  nrc: yup.string().required(),
});
const validate = withValidation({
  schema,
  type: "Yup",
  mode: "body",
});

const handler = async (req, res) => {
  if (req.method === "POST") {
    const response = await createUser(req);
    res.status(200).json(response);
  } else {
    res.status(405).json({
      message: "Method is not allowed",
    });
  }
};

export default validate(handler);
