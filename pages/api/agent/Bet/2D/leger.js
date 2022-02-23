import { getAgentLeger } from "../../../../../Controllers/Leger/2D/leger";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const response = await getAgentLeger(req);
    res.status(200).json(response);
  } else {
    res.status(405).json({
      message: "Method is not allowed",
    });
  }
};

export default handler;
