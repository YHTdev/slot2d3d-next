import { get2DNums } from "../../../../../Controllers/Settings/twoDnums";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const response = await get2DNums(req);
    res.status(200).json(response);
  } else {
    res.status(405).json({
      message: "Method is not allowed",
    });
  }
};

export default handler;
