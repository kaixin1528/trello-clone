import dots from "../public/dots.png";
import Image from "next/image";
import { List } from "../lib/const";

const Rename = ({
  list,
  onRename,
  onListSetting,
  handleDeleteList,
  rename,
  onListTitle,
  listSetting,
  handleRename,
  id,
  listTitle,
}: {
  list: List;
  onRename: Function;
  onListSetting: Function;
  handleDeleteList: Function;
  rename: string;
  onListTitle: Function;
  listSetting: string;
  handleRename: Function;
  id: number;
  listTitle: string;
}) => {
  return (
    <section className='grid grid-cols-2'>
      <form
        className='grid gap-2'
        onSubmit={() => handleRename(list.name, id, listTitle)}
      >
        <input
          disabled={rename !== list.name}
          type='text'
          placeholder={list.name}
          onChange={(e) => onListTitle(e.target.value)}
          className='w-36 text-base text-list font-medium placeholder:text-list focus:outline-none bg-transparent'
        />
        {rename === list.name && (
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
              onClick={() => onRename("")}
            >
              Cancel
            </button>
          </footer>
        )}
      </form>
      <button
        id={list.name}
        className='h-4 w-4 justify-self-end'
        onClick={(e) => {
          if (listSetting !== "") onListSetting("");
          else onListSetting(e.currentTarget.id);
        }}
      >
        <Image src={dots} alt='dots'></Image>
      </button>
      {listSetting === list.name && (
        <form className='col-start-2 grid z-10 p-3 gap-2 text-xs text-black text-opacity-50 divide-y shadow-md bg-white rounded-lg'>
          <button
            id={list.name}
            type='button'
            className='text-left'
            onClick={(e) => {
              onRename(e.currentTarget.id);
              onListSetting("");
            }}
          >
            Rename
          </button>
          <button
            type='submit'
            className='text-left pt-3'
            onClick={() => {
              handleDeleteList(list.name, id);
              onListSetting("");
            }}
          >
            Delete this list
          </button>
        </form>
      )}
    </section>
  );
};

export default Rename;
