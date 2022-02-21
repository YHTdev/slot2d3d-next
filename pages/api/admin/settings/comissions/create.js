import { withValidation } from "next-validations";
import * as yup from "yup";
import { createCommission } from "../../../../../Controllers/Settings/comission";

const schema = yup.object().shape({
  name: yup.string().required(),
  rate: yup.number().required(),
  type: yup.string().required(),
});
const validate = withValidation({
  schema,
  type: "Yup",
  mode: "body",
});

const handler = async (req, res) => {
  if (req.method === "POST") {
    const response = await createCommission(req);
    res.status(200).json(response);
  } else {
    res.status(405).json({
      message: "Method is not allowed",
    });
  }
};

export default validate(handler);
