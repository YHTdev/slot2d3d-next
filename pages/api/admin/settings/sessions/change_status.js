import { withValidation } from "next-validations";
import * as yup from "yup";
import { changeSessionStatus } from "../../../../../Controllers/Settings/session";

const schema = yup.object().shape({
  id: yup.string().required(),
  status:yup.string().required()
  
});
const validate = withValidation({
  schema,
  type: "Yup",
  mode: "body",
});

const handler = async (req, res) => {
  if (req.method === "POST") {
    const response = await changeSessionStatus(req);
    res.status(response.statusCode).json(response);
  } else {
    res.status(405).json({
      message: "Method is not allowed",
    });
  }
};

export default validate(handler);
