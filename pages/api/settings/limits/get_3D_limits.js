import { get3DLimits } from "../../../../Controllers/Settings/limit";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const response = await get3DLimits(req);
    res.status(200).json(response);
  } else {
    res.status(405).json({
      message: "Method is not allowed",
    });
  }
};

export default handler;
