const Comment = ({
  comment,
  handleAddComment,
  listIndex,
  cardIndex,
  onComment,
  id,
}: {
  comment: string;
  handleAddComment: Function;
  listIndex: number;
  cardIndex: number;
  onComment: Function;
  id: number;
}) => {
  return (
    <form
      className={`grid gap-2 text-list text-sm ${
        comment !== ""
          ? "ring-1 ring-blue-300 bg-white"
          : "ring-1 ring-gray-300 bg-transparent"
      } rounded-lg`}
      onSubmit={(e) => {
        handleAddComment(e, listIndex, cardIndex, id, comment);
      }}
    >
      <textarea
        placeholder='Write a comment...'
        value={comment}
        onChange={(e) => onComment(e.target.value)}
        className={`text-sm focus:outline-none resize-none h-12 p-3 rounded-lg ${
          comment !== "" ? "bg-white" : "bg-transparent"
        }`}
      />
      <button
        type='submit'
        className='py-2 px-4 m-3 text-xs text-white justify-self-end bg-save rounded-lg'
      >
        Comment
      </button>
    </form>
  );
};

export default Comment;
