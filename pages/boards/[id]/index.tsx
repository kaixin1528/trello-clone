import Link from "next/link";
import { useState } from "react";
import AddList from "../../../components/AddList";
import AddListForm from "../../../components/AddListForm";
import AddCard from "../../../components/AddCard";
import RenameDelete from "../../../components/RenameDelete";
import Menu from "../../../components/Menu";
import TabInfo from "../../../components/TabInfo";
import Labels from "../../../components/Labels";
import CardDescription from "../../../components/CardDescription";
import AddComment from "../../../components/AddComment";
import AddCardForm from "../../../components/AddCardForm";
import BoardHeader from "../../../components/BoardHeader";
import Comments from "../../../components/Comments";
import ListLabels from "../../../components/ListLabels";
import {
  handleAddList,
  handleAddCard,
  handleEditDescription,
  handleEditVisibility,
  handleRename,
  handleDeleteList,
  handleEditCardDescription,
  handleAddComment,
  handleAddLabels,
  url,
} from "../../../lib/const";

export type BoardInfo = {
  _id: string;
  boardName: string;
  users: string[];
  visibility: string;
  menu?: Object;
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

const Board = ({ boardInfo, id }: { boardInfo: any; id: string }) => {
  const [addList, setAddList] = useState(false);
  const [listTitle, setListTitle] = useState("");
  const [addCard, setAddCard] = useState("");
  const [cardTitle, setCardTitle] = useState("");
  const [openVisibility, setOpenVisibility] = useState(false);
  const [listSetting, setListSetting] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [editDescription, setEditDescription] = useState(false);
  const [description, setDescription] = useState(boardInfo.menu?.description);
  const [rename, setRename] = useState("");
  const [openCard, setOpenCard] = useState("");
  const [comment, setComment] = useState("");
  const [openLabel, setOpenLabel] = useState(false);
  const [labels, setLabels] = useState<Array<string>>([]);
  const [cardDescription, setCardDescription] = useState("");

  const textColor: any = {
    Concept: "text-[#9b51e0]",
    Technical: "text-[#448cef]",
    Design: "text-[#219653]",
    Fullstack: "text-[#f7c294]",
    Frontend: "text-[#f2ca53]",
    Priority: "text-[#f7cfc8]",
  };

  const backgroundColor: any = {
    Concept: "bg-[#ebdcf9]",
    Technical: "bg-[#dbe4fd]",
    Design: "bg-[#d3eadd]",
    Fullstack: "bg-[#fcebdb]",
    Frontend: "bg-[#fcf4db]",
    Priority: "bg-[#eb5b46]",
  };

  return (
    <main className='grid font-roboto'>
      <BoardHeader boardInfo={boardInfo} />
      <section className='grid p-5 gap-5'>
        <header className='sm:hidden grid grid-cols-5 items-center gap-5'>
          <h3 className='font-semibold col-span-3'>{boardInfo.boardName}</h3>
          <Link href='/' passHref>
            <button
              type='button'
              className='col-span-2 py-2 px-5 text-sm text-black text-opacity-60 justify-self-end bg-gray-100 rounded-lg'
            >
              All Boards
            </button>
          </Link>
        </header>
        <TabInfo
          boardInfo={boardInfo}
          onOpenVisibility={() => setOpenVisibility(!openVisibility)}
          openVisibility={openVisibility}
          onEditVisibility={handleEditVisibility}
          onShowMenu={() => setShowMenu(!showMenu)}
          id={id}
        />
        {showMenu && (
          <Menu
            boardInfo={boardInfo}
            onShowMenu={() => setShowMenu(!showMenu)}
            onEditDescription={() => setEditDescription(!editDescription)}
            onDescription={setDescription}
            description={description}
            editDescription={editDescription}
            handleEditDescription={(e: any) =>
              handleEditDescription(
                e,
                id,
                description,
                setEditDescription,
                editDescription
              )
            }
          />
        )}
        <ul
          className={`${
            openVisibility && "-mt-[15.5rem]"
          } grid grid-flow-col auto-cols-max snap-mandatory md:snap-x overflow-x-scroll items-start py-4 px-8 gap-5 rounded-lg`}
        >
          {boardInfo.lists?.map((list: List, listIndex: number) => {
            return (
              <li
                key={listIndex}
                className='grid p-4 gap-5 text-lg snap-center bg-main rounded-lg'
              >
                <RenameDelete
                  list={list}
                  onRename={setRename}
                  onListSetting={setListSetting}
                  handleDeleteList={handleDeleteList}
                  rename={rename}
                  onListTitle={setListTitle}
                  listSetting={listSetting}
                  handleRename={handleRename}
                  id={id}
                  listTitle={listTitle}
                />
                <ul
                  className={`grid gap-5 ${
                    listSetting === list.name && "-mt-[4.81rem]"
                  } ${listSetting !== "" && "-mb-10"}`}
                >
                  {list.cards?.map((card: Card, cardIndex: number) => {
                    return (
                      <li
                        key={cardIndex}
                        className='grid p-5 gap-5 text-base bg-white rounded-lg'
                      >
                        <h3 className='w-56 text-left text-card'>
                          <button
                            className='text-left'
                            onClick={() => setOpenCard(card.title)}
                          >
                            {card.title}
                          </button>
                        </h3>
                        <ul className='grid grid-cols-3 gap-3 text-xs text-center'>
                          {card.labels?.map((label, index) => {
                            return (
                              <li
                                key={index}
                                className={`py-1 ${textColor[label]} ${backgroundColor[label]} rounded-full`}
                              >
                                {label}
                              </li>
                            );
                          })}
                        </ul>
                        {openCard === card.title && (
                          <section className='absolute inset-0 z-10 py-16 bg-gray-600 bg-opacity-50'>
                            <section className='relative grid grid-cols-7 pt-10 py-6 px-10 gap-5 w-full sm:w-4/5 md:w-1/2 xl:w-1/3 mx-auto text-list text-left items-start bg-card rounded-lg'>
                              <button
                                className='absolute right-4 top-1 z-20 text-list font-medium'
                                onClick={() => {
                                  setOpenCard("");
                                  setComment("");
                                  if (editDescription)
                                    setEditDescription(false);
                                  if (openLabel) setOpenLabel(false);
                                }}
                              >
                                x
                              </button>
                              <section className='grid col-span-7 sm:col-span-5 gap-6'>
                                <section className='grid'>
                                  <h3 className='text-lg font-medium'>
                                    {card.title}
                                  </h3>
                                  <p className='text-xs text-subtitle font-light'>
                                    in list{" "}
                                    <span className='font-medium'>
                                      {list.name}
                                    </span>
                                  </p>
                                </section>
                                <ListLabels
                                  labels={labels}
                                  textColor={textColor}
                                  backgroundColor={backgroundColor}
                                />
                                <CardDescription
                                  handleEditCardDescription={
                                    handleEditCardDescription
                                  }
                                  onEditDescription={setEditDescription}
                                  onCardDescription={setCardDescription}
                                  editDescription={editDescription}
                                  listIndex={listIndex}
                                  cardIndex={cardIndex}
                                  card={card}
                                  cardDescription={cardDescription}
                                  id={id}
                                />
                                <AddComment
                                  comment={comment}
                                  handleAddComment={handleAddComment}
                                  listIndex={listIndex}
                                  cardIndex={cardIndex}
                                  onComment={setComment}
                                  id={id}
                                />
                                <Comments card={card} />
                              </section>
                              <Labels
                                onOpenLabel={() => setOpenLabel(!openLabel)}
                                openLabel={openLabel}
                                textColor={textColor}
                                backgroundColor={backgroundColor}
                                handleAddLabels={handleAddLabels}
                                card={card}
                                listIndex={listIndex}
                                cardIndex={cardIndex}
                                setLabels={setLabels}
                                labels={labels}
                                id={id}
                              />
                            </section>
                          </section>
                        )}
                      </li>
                    );
                  })}
                  {addCard === list.name && (
                    <AddCardForm
                      handleAddCard={() =>
                        handleAddCard(list.name, cardTitle, id)
                      }
                      cardTitle={cardTitle}
                      onAddCard={setAddCard}
                      onCardTitle={setCardTitle}
                    />
                  )}
                  <AddCard
                    list={list}
                    listSetting={listSetting}
                    onAddCard={setAddCard}
                  />
                </ul>
              </li>
            );
          })}
          {addList && (
            <AddListForm
              handleAddList={() => handleAddList(listTitle, id)}
              listTitle={listTitle}
              onListTitle={setListTitle}
              onAddList={setAddList}
              addList={addList}
            />
          )}
          <AddList onAddList={() => setAddList(!addList)} />
        </ul>
      </section>
    </main>
  );
};

export default Board;

export const getServerSideProps = async ({ params }: any) => {
  const id = params.id;
  const res = await fetch(`${url}/api/boards/${id}`);
  const boardInfo = (await res.json())[0];

  return {
    props: {
      boardInfo,
      id,
    },
  };
};
