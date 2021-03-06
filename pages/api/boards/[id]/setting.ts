import { ObjectId } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../../lib/mongodb";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const id: string = req.query.id.toString();
  switch (req.method) {
    case "GET":
      try {
        return getBoardInfo(res, id);
      } catch (error) {
        return res.json({ msg: error });
      }
    case "POST":
      try {
        return addList(req, res, id);
      } catch (error) {
        return res.json({ msg: error });
      }
    case "PUT":
      try {
        return editVisibility(req, res, id);
      } catch (error) {
        return res.json({ msg: error });
      }
  }
}

export const getBoardInfo = async (res: NextApiResponse, id: string) => {
  const { db } = await connectToDatabase();
  const boardInfo = await db
    .collection("boards")
    .find({ _id: new ObjectId(id) })
    .toArray();
  return res.status(200).json(boardInfo);
};

export const addList = async (
  req: NextApiRequest,
  res: NextApiResponse,
  id: string
) => {
  const { db } = await connectToDatabase();
  await db
    .collection("boards")
    .updateOne(
      { _id: new ObjectId(id) },
      { $push: { lists: { name: req.body.title } } }
    );
  return res.status(200).json({ msg: "Successfully added a list" });
};

export const editVisibility = async (
  req: NextApiRequest,
  res: NextApiResponse,
  id: string
) => {
  const { db } = await connectToDatabase();
  console.log(req.body.visibility);
  await db.collection("boards").updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        visibility: req.body.visibility,
      },
    }
  );
  return res.status(200).json({ msg: "Successfully edited the visibility" });
};
