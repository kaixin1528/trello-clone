import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import { url } from "../lib/const";
// import { connectToDatabase } from "../lib/mongodb";

export type BoardInfo = {
  _id: string;
  boardName: string;
  users: string[];
  visibility: string;
  menu?: Object;
  lists?: any[];
};

const Home = ({ boards }: any) => {
  const [add, setAdd] = useState(false);
  const [boardTitle, setBoardTitle] = useState("");
  const [openVisibility, setOpenVisibility] = useState(false);
  const [visibility, setVisibility] = useState("Public");

  const handleAddBoard = async () => {
    await fetch("http://localhost:3000/api/boards", {
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
    // const board = {
    //   boardName: boardTitle,
    //   users: ["KH"],
    //   visibility: visibility,
    // };

    // const { db } = await connectToDatabase();
    // await db.collection("boards").insertOne(board);
  };

  return (
    <main
      className={`grid relative min-h-screen items-start sm:pb-80 font-roboto`}
    >
      <Head>
        <title>Trello Clone</title>
        <meta name='description' content='Generated by create next app' />
      </Head>

      <Header />

      <section className='grid p-5 px-10 sm:px-16 lg:px-28 xl:px-40 gap-8'>
        <header className='grid grid-cols-2 items-center'>
          <h3 className='text-lg lg:text-xl text-list'>All Boards</h3>
          <button
            className='text-sm text-white font-medium py-2 px-5 justify-self-end bg-save rounded-lg'
            onClick={() => setAdd(!add)}
          >
            + Add
          </button>
        </header>
        <ul className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 snap-mandatory snap-x overflow-x-scroll gap-8'>
          {boards.map((board: BoardInfo) => {
            return (
              <Link key={board._id} href={`/boards/${board._id}`} passHref>
                <li className='grid p-3 gap-3 sm:gap-5 snap-center cursor-pointer bg-white border-2 border-gray-50 rounded-lg'>
                  <section className='h-40 w-full bg-gradient-to-b from-cyan-800 to-orange-400'>
                    <h4 className='text-lg text-white w-4/5 mx-auto pt-5 font-medium'>
                      {board.boardName}
                    </h4>
                  </section>
                  <section className='grid grid-cols-2 md:grid-cols-5 gap-5 items-center'>
                    <ul className='grid grid-cols-3 md:col-span-3 gap-2 text-xs text-white text-center items-center'>
                      {board.users.map((user: string, i: number) => {
                        if (i >= 3) return;
                        return (
                          <li
                            key={i}
                            className='p-2 font-bold bg-gray-300 rounded-lg'
                          >
                            {user}
                          </li>
                        );
                      })}
                    </ul>
                    {board.users.length > 3 && (
                      <h5 className='md:col-span-2 text-sm text-black text-opacity-50'>
                        + {board.users.length - 3} others
                      </h5>
                    )}
                  </section>
                </li>
              </Link>
            );
          })}
        </ul>
      </section>

      {add && (
        <section className='absolute inset-0 p-10 bg-gray-900 bg-opacity-50'>
          <form
            className='relative top-12 grid text-sm sm:w-3/5 lg:w-2/5 sm:mx-auto bg-white p-6 gap-5 rounded-lg'
            onSubmit={handleAddBoard}
          >
            <input
              className='pl-5 py-2 ring-1 ring-gray-300 rounded-lg focus:outline-none'
              type='text'
              name='boardTitle'
              id='boardTitle'
              placeholder='Add board title'
              value={boardTitle}
              onChange={(e) => {
                setBoardTitle(e.target.value);
              }}
            />
            <button
              type='button'
              className='py-2 px-5 text-black text-opacity-60 justify-self-start bg-gray-100 rounded-lg'
              onClick={() => setOpenVisibility(!openVisibility)}
            >
              {visibility}
            </button>
            {openVisibility && (
              <section className='grid p-5 gap-5 z-10 text-list shadow-lg justify-self-start bg-white rounded-lg'>
                <section className='grid'>
                  <h5 className='text-[0.85rem]'>Visibility</h5>
                  <p className='font-light text-xs text-black text-opacity-50'>
                    Choose who can see this board.
                  </p>
                </section>
                <button
                  id='Public'
                  className='grid p-3 text-left hover:bg-gray-100 rounded-lg'
                  onClick={(e) => {
                    setOpenVisibility(!openVisibility);
                    setVisibility("Public");
                  }}
                >
                  <h5 className='text-[0.8rem]'>Public</h5>
                  <p className='font-light text-xs text-black text-opacity-50'>
                    Anyone on the internet can see this.
                  </p>
                </button>
                <button
                  id='Private'
                  className='grid p-3 text-left hover:bg-gray-100 rounded-lg'
                  onClick={(e) => {
                    setOpenVisibility(!openVisibility);
                    setVisibility("Private");
                  }}
                >
                  <h5 className='text-[0.8rem]'>Private</h5>
                  <p className='font-light text-xs text-black text-opacity-50'>
                    Only board members can see this.
                  </p>
                </button>
              </section>
            )}
            <footer className='grid grid-cols-2 justify-self-end'>
              <button
                type='button'
                className='text-black text-opacity-60'
                onClick={() => setAdd(!add)}
              >
                Cancel
              </button>
              <button
                type='submit'
                className='py-2 px-5 text-white bg-blue-500 rounded-lg'
              >
                + Create
              </button>
            </footer>
          </form>
        </section>
      )}
    </main>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const res = await fetch(`${url}/api/boards`);
  const boards = await res.json();

  // const { db } = await connectToDatabase();
  // const boards = await db.collection("boards").find({}).toArray();

  return {
    props: { boards },
  };
};
