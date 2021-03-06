const dev_url = "http://localhost:3000";
const prod_url = "https://kaixin-trello-clone.netlify.app";

export const url = process.env.NODE_ENV === "development" ? dev_url : prod_url;

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
};

export const handleAddBoard = async (
  boardTitle: string,
  visibility: string
) => {
  await fetch(`/api/boards`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      boardName: boardTitle,
      users: ["KH"],
      visibility: visibility,
    }),
  });
};

export type BoardInfo = {
  _id: any;
  boardName: string;
  users: string[];
  visibility: string;
  menu?: {
    madeBy: string;
    description: string;
  };
  lists?: any[];
};
export type List = {
  name: string;
  cards: any[];
};

export type Card = {
  title: string;
  description: string;
  labels?: string[];
  members?: string[];
  comments?: any[];
};

export interface Params {
  id: string;
}

export interface Comment {
  name: string;
  description: string;
}
