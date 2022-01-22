import { ObjectId } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../../../../../../lib/mongodb";

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
        return addComment(req, res, id);
      } catch (error) {
        return res.json({ msg: error });
      }

    case "PUT":
      try {
        return editCardDescription(req, res, id);
      } catch (error) {
        return res.json({ msg: error });
      }

    case "DELETE":
      try {
        return addLabels(req, res, id);
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

export const addComment = async (
  req: NextApiRequest,
  res: NextApiResponse,
  id: string
) => {
  const { db } = await connectToDatabase();
  await db.collection("boards").updateOne(
    { _id: new ObjectId(id) },
    {
      $addToSet: {
        [`lists.${req.body.listIndex}.cards.${req.body.cardIndex}.comments`]: {
          name: "Kaixin Huang",
          description: req.body.comment,
        },
      },
    }
  );
  return res
    .status(200)
    .json({ msg: "Successfully added a comment to the card" });
};

export const editCardDescription = async (
  req: NextApiRequest,
  res: NextApiResponse,
  id: string
) => {
  const { db } = await connectToDatabase();
  await db.collection("boards").updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        [`lists.${req.body.listIndex}.cards.${req.body.cardIndex}.description`]:
          req.body.cardDescription,
      },
    }
  );
  return res
    .status(200)
    .json({ msg: "Successfully edited the card's description." });
};

export const addLabels = async (
  req: NextApiRequest,
  res: NextApiResponse,
  id: string
) => {
  const { db } = await connectToDatabase();
  await db.collection("boards").updateOne(
    { _id: new ObjectId(id) },
    {
      $addToSet: {
        [`lists.${req.body.listIndex}.cards.${req.body.cardIndex}.labels`]:
          req.body.label,
      },
    }
  );
  return res.status(200).json({ msg: "Successfully added a card to the list" });
};
