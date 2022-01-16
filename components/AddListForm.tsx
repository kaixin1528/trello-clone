const AddListForm = ({
  handleAddList,
  listTitle,
  onListTitle,
  onAddList,
  addList,
}: any) => {
  return (
    <form
      className='grid p-4 pl-6 pr-20 gap-4 ring-1 ring-blue-300 bg-white rounded-lg'
      onSubmit={handleAddList}
    >
      <input
        type='text'
        placeholder='Enter a title for this list...'
        value={listTitle}
        onChange={(e) => onListTitle(e.target.value)}
        className='text-list p-2 placeholder:text-black placeholder:text-opacity-30 focus:outline-none rounded-lg'
      />

      <footer className='grid grid-cols-2 gap-4 text-xs justify-self-start'>
        <button
          type='submit'
          className='px-3 py-1 text-white justify-self-start bg-save rounded-lg'
        >
          Add list
        </button>
        <button
          type='button'
          className='text-black text-opacity-40'
          onClick={() => {
            onAddList(!addList);
            onListTitle("");
          }}
        >
          Cancel
        </button>
      </footer>
    </form>
  );
};

export default AddListForm;
