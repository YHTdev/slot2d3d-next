import { withValidation } from "next-validations";
import * as yup from "yup";
import { create2DResult } from "../../../../../../Controllers/Result/twoD";

const schema = yup.object().shape({
    twoDNumerId:yup.string().required(),
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
    const response = await create2DResult(req);
    res.status(200).json(response);
  } else {
    res.status(405).json({
      message: "Method is not allowed",
    });
  }
};

export default validate(handler);
