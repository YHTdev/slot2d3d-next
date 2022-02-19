import { withValidation } from "next-validations";
import * as yup from "yup";
import { update3DSessions } from "../../../../../../Controllers/Settings/session";

const schema = yup.object().shape({
  name: yup.string().required(),
  fromDt: yup.date().required(),
  toDt: yup.date().required(),
  id: yup.string().required()
});
const validate = withValidation({
  schema,
  type: "Yup",
  mode: "body"
});

const handler = async (req, res) => {
  if (req.method === "POST") {
    const response = await update3DSessions(req);
    res.status(response.statusCode).json(response);
  } else {
    res.status(405).json({
      message: "Method is not allowed"
    });
  }
};

export default validate(handler);
