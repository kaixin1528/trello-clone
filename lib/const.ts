// import { connectToDatabase } from "../lib/mongodb";
// import { ObjectId } from "mongodb";

export const url =
  process.env.NODE_ENV === "development"
    ? process.env.DEV_URL
    : process.env.PROD_URL;

export const handleAddList = async (listTitle: string, id: string) => {
  await fetch(`/api/boards/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: listTitle,
    }),
  });

  // const { db } = await connectToDatabase();
  // await db
  //   .collection("boards")
  //   .updateOne(
  //     { _id: new ObjectId(id) },
  //     { $push: { lists: { name: listTitle } } }
  //   );
};

export const handleAddCard = async (
  title: string,
  cardTitle: string,
  id: string
) => {
  await fetch(`/api/boards/${id}/lists/${title}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      cardTitle: cardTitle,
    }),
  });

  // const { db } = await connectToDatabase();
  // await db
  //   .collection("boards")
  //   .updateOne(
  //     { _id: new ObjectId(id), "lists.name": title },
  //     { $addToSet: { "lists.$.cards": { title: cardTitle } } }
  //   );
};

export const handleEditDescription = async (
  e: any,
  id: string,
  description: string,
  setEditDescription: Function,
  editDescription: boolean
) => {
  e.preventDefault();
  await fetch(`/api/boards/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description: description,
    }),
  });

  // const { db } = await connectToDatabase();
  // await db.collection("boards").updateOne(
  //   { _id: new ObjectId(id) },
  //   {
  //     $set: {
  //       menu: { madeBy: "Kaixin Huang", description: description },
  //     },
  //   }
  // );
  setEditDescription(!editDescription);
};

export const handleEditVisibility = async (
  value: string,
  id: string,
  setOpenVisibility: Function,
  openVisibility: boolean
) => {
  await fetch(`/api/boards/${id}/setting`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      visibility: value,
    }),
  });

  // const { db } = await connectToDatabase();
  // console.log(value);
  // await db.collection("boards").updateOne(
  //   { _id: new ObjectId(id) },
  //   {
  //     $set: {
  //       visibility: value,
  //     },
  //   }
  // );

  setOpenVisibility(!openVisibility);
};

export const handleRename = async (
  title: string,
  id: string,
  listTitle: string
) => {
  await fetch(`/api/boards/${id}/lists/${title}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      newTitle: listTitle,
    }),
  });

  // const { db } = await connectToDatabase();
  // await db
  //   .collection("boards")
  //   .updateOne(
  //     { _id: new ObjectId(id), "lists.name": title },
  //     { $set: { "lists.$.name": listTitle } }
  //   );
};

export const handleDeleteList = async (title: string, id: string) => {
  await fetch(`/api/boards/${id}/lists/${title}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
    }),
  });

  // const { db } = await connectToDatabase();
  // await db
  //   .collection("boards")
  //   .updateOne(
  //     { _id: new ObjectId(id) },
  //     { $pull: { lists: { name: title } } }
  //   );

  window.location.reload();
};

export const handleEditCardDescription = async (
  e: any,
  listIndex: number,
  i: number,
  id: string,
  cardDescription: string,
  setEditDescription: Function,
  editDescription: boolean
) => {
  e.preventDefault();
  await fetch(`/api/boards/${id}/lists/${listIndex}/cards/${i}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      listIndex: listIndex,
      cardIndex: i,
      cardDescription: cardDescription,
    }),
  });
  // const { db } = await connectToDatabase();
  // await db.collection("boards").updateOne(
  //   { _id: new ObjectId(id) },
  //   {
  //     $set: {
  //       [`lists.${listIndex}.cards.${i}.description`]: cardDescription,
  //     },
  //   }
  // );

  setEditDescription(!editDescription);
};

export const handleAddComment = async (
  e: any,
  listIndex: number,
  cardIndex: number,
  id: string,
  comment: string
) => {
  await fetch(`/api/boards/${id}/lists/${listIndex}/cards/${cardIndex}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      listIndex: listIndex,
      cardIndex: cardIndex,
      comment: comment,
    }),
  });

  // const { db } = await connectToDatabase();
  // await db.collection("boards").updateOne(
  //   { _id: new ObjectId(id) },
  //   {
  //     $addToSet: {
  //       [`lists.${listIndex}.cards.${cardIndex}.comments`]: {
  //         name: "Kaixin Huang",
  //         description: comment,
  //       },
  //     },
  //   }
  // );
};

export const handleAddLabels = async (
  currentLabels: string[],
  label: string,
  listIndex: number,
  cardIndex: number,
  setLabels: Function,
  labels: string[],
  id: string
) => {
  if (!currentLabels || !currentLabels.includes(label))
    setLabels([...labels, label]);
  await fetch(`/api/boards/${id}/lists/${listIndex}/cards/${cardIndex}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      listIndex: listIndex,
      cardIndex: cardIndex,
      label: label,
    }),
  });

  // const { db } = await connectToDatabase();
  // await db.collection("boards").updateOne(
  //   { _id: new ObjectId(id) },
  //   {
  //     $addToSet: {
  //       [`lists.${listIndex}.cards.${cardIndex}.labels`]: label,
  //     },
  //   }
  // );
};
