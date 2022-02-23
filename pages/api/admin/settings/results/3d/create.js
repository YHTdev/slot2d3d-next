import { withValidation } from "next-validations";
import * as yup from "yup";
import { create3DResult } from "../../../../../../Controllers/Result/threeD";

const schema = yup.object().shape({
  threeDNumerId:yup.string().required(),
    sessionId:yup.string().required(),
    confirmDt:yup.string().required()
});
const validate = withValidation({
  schema,
  type: "Yup",
  mode: "body",
});

const handler = async (req, res) => {
  if (req.method === "POST") {
    const response = await create3DResult(req);
    res.status(200).json(response);
  } else {
    res.status(405).json({
      message: "Method is not allowed",
    });
  }
};

export default validate(handler);
