// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ObjectId } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../../../../lib/mongodb";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const id: string = req.query.id.toString();
  switch (req.method) {
    case "GET":
      try {
        return getBoardInfo(req, res, id);
      } catch (error) {
        return res.json({ msg: error });
      }
    case "POST":
      try {
        return addCard(req, res, id);
      } catch (error) {
        return res.json({ msg: error });
      }

    case "PUT":
      try {
        return rename(req, res, id);
      } catch (error) {
        return res.json({ msg: error });
      }

    case "DELETE":
      try {
        return deleteList(req, res, id);
      } catch (error) {
        return res.json({ msg: error });
      }
  }
}

export const getBoardInfo = async (
  req: NextApiRequest,
  res: NextApiResponse,
  id: string
) => {
  const { db } = await connectToDatabase();
  const boardInfo = await db
    .collection("boards")
    .find({ _id: new ObjectId(id) })
    .toArray();
  return res.status(200).json(boardInfo);
};

export const addCard = async (
  req: NextApiRequest,
  res: NextApiResponse,
  id: string
) => {
  const { db } = await connectToDatabase();
  await db
    .collection("boards")
    .updateOne(
      { _id: new ObjectId(id), "lists.name": req.body.title },
      { $addToSet: { "lists.$.cards": { title: req.body.cardTitle } } }
    );
  return res.status(200).json({ msg: "Successfully added a card to the list" });
};

export const rename = async (
  req: NextApiRequest,
  res: NextApiResponse,
  id: string
) => {
  const { db } = await connectToDatabase();
  await db
    .collection("boards")
    .updateOne(
      { _id: new ObjectId(id), "lists.name": req.body.title },
      { $set: { "lists.$.name": req.body.newTitle } }
    );
  return res.status(200).json({ msg: "Successfully renamed the list" });
};

export const deleteList = async (
  req: NextApiRequest,
  res: NextApiResponse,
  id: string
) => {
  const { db } = await connectToDatabase();
  await db
    .collection("boards")
    .updateOne(
      { _id: new ObjectId(id) },
      { $pull: { lists: { name: req.body.title } } }
    );
  return res.status(200).json({ msg: "Successfully added a card to the list" });
};
