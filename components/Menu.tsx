import React from "react";
import { BoardInfo } from "../lib/const";

const Menu = ({
  boardInfo,
  onShowMenu,
  onEditDescription,
  onDescription,
  description,
  editDescription,
  handleEditDescription,
}: {
  boardInfo: BoardInfo;
  onShowMenu: React.MouseEventHandler<HTMLButtonElement>;
  onEditDescription: React.MouseEventHandler<HTMLButtonElement>;
  onDescription: Function;
  description: string;
  editDescription: boolean;
  handleEditDescription: React.FormEventHandler<HTMLFormElement>;
}) => {
  return (
    <aside className='absolute right-0 top-20 pb-[26rem] pr-20 p-4 grid gap-3 shadow-md bg-white z-10'>
      <article className='grid grid-cols-2 text-list'>
        <h4 className='text-base p-2 font-medium border-b-2 border-gray-100'>
          About This Board
        </h4>
        <button
          className='absolute right-5 top-5 justify-self-end'
          onClick={onShowMenu}
        >
          x
        </button>
      </article>
      <article className='grid p-2 gap-2 text-sm text-card'>
        <h5 className='font-bold '>Made by</h5>
        <article className='grid grid-flow-col auto-cols-max gap-3 items-center'>
          <div className='p-2 font-bold text-white ring-1 ring-gray-200 bg-gray-200 rounded-lg'>
            {boardInfo.users[0]}
          </div>
          <h5 className='font-medium'>{boardInfo.menu?.madeBy}</h5>
        </article>
      </article>
      <form
        className='grid p-2 gap-2 text-sm text-card'
        onSubmit={handleEditDescription}
      >
        <article className='grid grid-cols-2 justify-self-start items-center'>
          <h5 className='font-bold'>Description</h5>
          <button
            type='button'
            className='p-2 mx-auto text-xs bg-gray-100 rounded-lg'
            onClick={onEditDescription}
          >
            Edit
          </button>
        </article>
        <textarea
          disabled={!editDescription}
          value={description}
          onChange={(e) => onDescription(e.target.value)}
          className={`text-sm focus:outline-none resize-none h-40 p-3 rounded-lg ${
            editDescription && "ring-1 ring-gray-300"
          }`}
        />
        {editDescription && (
          <footer className='grid grid-cols-2 gap-4 text-xs justify-self-start'>
            <button
              type='submit'
              className='px-3 py-1 text-white justify-self-start bg-save rounded-lg'
            >
              Save
            </button>
            <button
              type='button'
              className='text-black text-opacity-40'
              onClick={onEditDescription}
            >
              Cancel
            </button>
          </footer>
        )}
      </form>
    </aside>
  );
};

export default Menu;
