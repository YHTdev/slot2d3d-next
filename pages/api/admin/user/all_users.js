import { withValidation } from "next-validations";
import * as yup from "yup";
import { getUsers } from "../../../../Controllers/Users";

const schema = yup.object().shape({});
const validate = withValidation({
  schema,
  type: "Yup",
  mode: "body",
});

const handler = async (req, res) => {
  if (req.method === "GET") {
    const response = await getUsers(req);
    res.status(response.statusCode).json(response);
  } else {
    res.status(405).json({
      message: "Method is not allowed",
    });
  }
};

export default validate(handler);