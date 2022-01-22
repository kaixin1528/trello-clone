import { Card, Comment } from "../lib/const";

const Comments = ({ card }: { card: Card }) => {
  return (
    <ul className='grid gap-5 text-sm h-24 sm:h-32 overflow-scroll'>
      <h3 className='text-base font-medium'>Comments</h3>
      {card.comments?.map((comment: Comment, index: number) => {
        return (
          <li key={index}>
            <h4 className='font-medium'>{comment.name}</h4>
            <p className='py-2'>{comment.description}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Comments;
