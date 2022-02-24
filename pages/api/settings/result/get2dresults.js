import { get2DResults } from "../../../../Controllers/Result/twoD";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const response = await get2DResults(req);
    res.status(200).json(response);
  } else {
    res.status(405).json({
      message: "Method is not allowed",
    });
  }
};

export default handler;
