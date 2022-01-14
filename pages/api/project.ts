import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "lib/dbConnect";
import { projects } from "models";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const projectData = await projects.find();
        res.status(200).json(projectData);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
