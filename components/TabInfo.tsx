import { BoardInfo } from "../lib/const";

const TabInfo = ({
  boardInfo,
  onOpenVisibility,
  openVisibility,
  onEditVisibility,
  onShowMenu,
  id,
}: {
  boardInfo: BoardInfo;
  onOpenVisibility: React.MouseEventHandler<HTMLButtonElement>;
  openVisibility: boolean;
  onEditVisibility: Function;
  onShowMenu: React.MouseEventHandler<HTMLButtonElement>;
  id: number;
}) => {
  return (
    <section className='grid grid-cols-3 relative text-sm items-center'>
      <article className='grid gap-3 col-span-2'>
        <button
          className='sm:col-span-2 py-2 px-5 text-black text-opacity-60 justify-self-start hover:bg-gray-200 bg-gray-100 rounded-lg'
          onClick={onOpenVisibility}
        >
          {boardInfo.visibility}
        </button>
        {openVisibility && (
          <form className='grid p-5 gap-5 z-10 text-list shadow-lg justify-self-start bg-white rounded-lg'>
            <article className='grid'>
              <h5 className='text-[0.85rem]'>Visibility</h5>
              <p className='font-light text-xs text-black text-opacity-50'>
                Choose who can see this board.
              </p>
            </article>
            <button
              id='Public'
              className='grid p-3 text-left hover:bg-gray-100 rounded-lg'
              onClick={(e) => {
                onEditVisibility(
                  e.currentTarget.id,
                  id,
                  onOpenVisibility,
                  openVisibility
                );
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
                onEditVisibility(
                  e.currentTarget.id,
                  id,
                  onOpenVisibility,
                  openVisibility
                );
              }}
            >
              <h5 className='text-[0.8rem]'>Private</h5>
              <p className='font-light text-xs text-black text-opacity-50'>
                Only board members can see this.
              </p>
            </button>
          </form>
        )}
      </article>
      <ul className='absolute left-24 top-0 grid grid-flow-col gap-2 text-xs text-white text-center items-center'>
        {boardInfo.users.map((user: string, i: number) => {
          return (
            <li
              key={i}
              className='sm:mx-0 p-2 font-bold text-white ring-1 ring-gray-200 bg-gray-200 rounded-lg'
            >
              {user}
            </li>
          );
        })}
      </ul>
      <button
        className='absolute right-0 top-0 py-2 px-5 text-sm text-black text-opacity-60 justify-self-end hover:bg-gray-200 bg-gray-100 rounded-lg'
        onClick={onShowMenu}
      >
        Menu
      </button>
    </section>
  );
};

export default TabInfo;
