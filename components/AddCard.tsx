import { List } from "../lib/const";

const AddCard = ({
  list,
  listSetting,
  onAddCard,
}: {
  list: List;
  listSetting: string;
  onAddCard: Function;
}) => {
  return (
    <li
      key={list.name}
      className={`${
        listSetting && "mb-10"
      } grid grid-cols-2 px-4 items-center text-add bg-add rounded-lg`}
    >
      <h4 className='text-sm'>Add another card</h4>
      <button
        id={list.name}
        className='justify-self-end text-xl text-center text-bg-blue-500'
        onClick={(e) => onAddCard(e.currentTarget.id)}
      >
        +
      </button>
    </li>
  );
};

export default AddCard;
