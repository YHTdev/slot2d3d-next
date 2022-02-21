import { get2DComissions } from "../../../../Controllers/Settings/comission";

const handler = async (req, res) => {
  if (req.method === "GET") {
    const response = await get2DComissions(req);
    res.status(200).json(response);
  } else {
    res.status(405).json({
      message: "Method is not allowed",
    });
  }
};

export default handler;
