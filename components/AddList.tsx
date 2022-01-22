import React from "react";

const AddList = ({
  onAddList,
}: {
  onAddList: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <li className='grid grid-cols-2 py-1 px-5 snap-center items-center text-add bg-add rounded-lg'>
      <h4 className='text-sm'>Add another list</h4>
      <button
        className='justify-self-end text-xl text-center text-bg-blue-500'
        onClick={onAddList}
      >
        +
      </button>
    </li>
  );
};

export default AddList;
