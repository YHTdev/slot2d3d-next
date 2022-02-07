import { deleteUser } from "../../../../../lib/controllers/user";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const response = deleteUser(req, res);
    res.json(response);
  } else {
    return;
  }
}
