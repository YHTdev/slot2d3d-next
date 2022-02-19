import { withValidation } from "next-validations";
import * as yup from "yup";
import { loginUser } from "../../../Controllers/Users";
import { serialize } from 'cookie';
const schema = yup.object().shape({
  phone: yup.string().required(),
  password: yup.string().required(),
});
const validate = withValidation({
  schema,
  type: "Yup",
  mode: "body",
});

const handler = async (req, res) => {
  if (req.method === "POST") {
    const response = await loginUser(req);
    if(response.statusCode===200){
      res.setHeader('Set-Cookie', serialize('USER_TOKEN', response.accessToken, { path: '/',expires:new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()+1) }));
      res.status(200).json(response);
    }
    else{
      res.status(200).json(response);
    }
  } else {
    res.status(405).json({
      message: "Method is not allowed",
    });
  }
};

export default validate(handler);
