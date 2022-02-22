import { withValidation } from "next-validations";
import * as yup from "yup";
import { updateLimit } from "../../../../../Controllers/Settings/limit";

const schema = yup.object().shape({
  amount: yup.number().required(),
  type: yup.string().required(),
  sessionId: yup.string().required(),
  id: yup.string().required(),
});
const validate = withValidation({
  schema,
  type: "Yup",
  mode: "body",
});

const handler = async (req, res) => {
  if (req.method === "POST") {
    const response = await updateLimit(req);
    res.status(200).json(response);
  } else {
    res.status(405).json({
      message: "Method is not allowed",
    });
  }
};

export default validate(handler);
