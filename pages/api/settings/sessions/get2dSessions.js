import { get2DSessions } from "../../../../Controllers/Settings/session";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const response = await get2DSessions(req);
    res.status(200).json(response);
  } else {
    res.status(405).json({
      message: "Method is not allowed",
    });
  }
};

export default handler;
