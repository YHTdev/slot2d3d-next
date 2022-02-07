import { allUsers } from "../../../../lib/controllers/user";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const response = await allUsers(req, res);
    res.json(response);
  } else return;
};

export default handler;
