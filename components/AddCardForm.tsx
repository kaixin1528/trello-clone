const AddCardForm = ({
  handleAddCard,
  cardTitle,
  onAddCard,
  onCardTitle,
}: {
  handleAddCard: React.FormEventHandler<HTMLFormElement>;
  cardTitle: string;
  onAddCard: Function;
  onCardTitle: Function;
}) => {
  return (
    <form
      className='grid p-4 pl-6 pr-16 gap-4 ring-1 ring-gray-100 bg-white rounded-lg'
      onSubmit={handleAddCard}
    >
      <input
        type='text'
        placeholder='Enter a title for this card...'
        value={cardTitle}
        onChange={(e) => onCardTitle(e.target.value)}
        className='text-base text-card placeholder:text-black placeholder:text-opacity-30 focus:outline-none'
      />

      <section className='grid grid-cols-2 text-xs justify-self-start'>
        <button
          type='submit'
          className='px-3 py-1 text-white justify-self-start bg-save rounded-lg'
        >
          Add card
        </button>
        <button
          type='button'
          className='text-black text-opacity-40'
          onClick={() => {
            onAddCard("");
            onCardTitle("");
          }}
        >
          Cancel
        </button>
      </section>
    </form>
  );
};

export default AddCardForm;
