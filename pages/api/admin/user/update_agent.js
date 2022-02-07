import { UpdateUser } from "../../../../../lib/controllers/user";

export default async function update_agent(req, res) {
  if (req.method === "PUT") {
    const response = UpdateUser(req, res);
    res.json(response);
  } else {
    return;
  }
}
