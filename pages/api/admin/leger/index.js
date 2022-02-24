import { getAdminLeger } from "../../../../Controllers/Leger/Admin/leger";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const response = await getAdminLeger(req);
    res.status(200).json(response);
  } else {
    res.status(405).json({
      message: "Method is not allowed",
    });
  }
};

export default handler;
