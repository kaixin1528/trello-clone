import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../lib/mongodb";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      try {
        return getBoards(req, res);
      } catch (error) {
        return res.json({ msg: error });
      }
    case "POST":
      try {
        return addBoard(req, res);
      } catch (error) {
        return res.json({ msg: error });
      }
  }
}

export const getBoards = async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase();
  const boards = await db.collection("boards").find({}).toArray();
  return res.status(200).json(boards);
};

export const addBoard = async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connectToDatabase();
  await db.collection("boards").insertOne(req.body);
  return res.status(200).json({ msg: "Added a board successfully" });
};
