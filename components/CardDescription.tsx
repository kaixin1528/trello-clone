import { Card } from "../lib/const";

const CardDescription = ({
  handleEditCardDescription,
  onEditDescription,
  onCardDescription,
  editDescription,
  listIndex,
  cardIndex,
  card,
  cardDescription,
  id,
}: {
  handleEditCardDescription: Function;
  onEditDescription: Function;
  onCardDescription: Function;
  editDescription: boolean;
  listIndex: number;
  cardIndex: number;
  card: Card;
  cardDescription: string;
  id: number;
}) => {
  return (
    <form
      className='grid gap-3'
      onSubmit={(e) =>
        handleEditCardDescription(
          e,
          listIndex,
          cardIndex,
          id,
          cardDescription,
          onEditDescription,
          editDescription
        )
      }
    >
      <section className='grid grid-cols-2 justify-self-start items-center'>
        <h4 className='text-base font-medium'>Description</h4>
        <button
          type='button'
          className='p-2 mx-auto text-xs bg-white rounded-lg'
          onClick={() => {
            onEditDescription(!editDescription);
            onCardDescription(card.description);
          }}
        >
          Edit
        </button>
      </section>
      <textarea
        disabled={!editDescription}
        placeholder={card.description}
        value={cardDescription}
        onChange={(e) => onCardDescription(e.target.value)}
        className={`text-sm placeholder:text-list focus:outline-none resize-none h-28 p-3 rounded-lg ${
          editDescription ? "ring-1 ring-blue-300 bg-white" : "bg-add"
        }`}
      />
      {editDescription && (
        <section className='grid grid-cols-2 gap-4 text-xs justify-self-start'>
          <button
            type='submit'
            className='px-3 py-1 text-white justify-self-start bg-save rounded-lg'
          >
            Save
          </button>
          <button
            type='button'
            className='text-black text-opacity-40'
            onClick={() => onEditDescription(!editDescription)}
          >
            Cancel
          </button>
        </section>
      )}
    </form>
  );
};

export default CardDescription;
