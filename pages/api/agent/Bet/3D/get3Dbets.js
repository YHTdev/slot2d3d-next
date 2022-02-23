import { get3DBets } from "../../../../../Controllers/Bets/threeDBets";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const response = await get3DBets(req);
    res.status(200).json(response);
  } else {
    res.status(405).json({
      message: "Method is not allowed",
    });
  }
};

export default handler;
