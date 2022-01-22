import Link from "next/link";
import Image from "next/image";
import logo from "../public/trello.svg";
import { BoardInfo } from "../lib/const";

const BoardHeader = ({ boardInfo }: { boardInfo: BoardInfo }) => {
  return (
    <header className='grid sm:grid-cols-2 p-5 gap-3 border-b-2 border-gray-200 bg-white'>
      <Link href='/' passHref>
        <section className='grid grid-flow-col auto-cols-max cursor-pointer gap-2 items-center'>
          <section className='h-7 w-7'>
            <Image src={logo} alt='trello'></Image>
          </section>
          <h2 className='text-xl text-list font-bold'>Trello</h2>
        </section>
      </Link>
      <section className='hidden sm:grid sm:grid-cols-5 justify-self-end items-center gap-5'>
        <h3 className='text-lg text-list sm:col-span-3 font-medium'>
          {boardInfo.boardName}
        </h3>
        <Link href='/' passHref>
          <button
            type='button'
            className='sm:col-span-2 py-2 px-5 sm:text-sm text-black text-opacity-60 justify-self-start hover:bg-gray-200 bg-gray-100 rounded-lg'
          >
            All Boards
          </button>
        </Link>
      </section>
    </header>
  );
};

export default BoardHeader;
