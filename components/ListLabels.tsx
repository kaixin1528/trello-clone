const ListLabels = ({ labels, textColor, backgroundColor }: any) => {
  return (
    <ul className='grid grid-cols-4 text-xs gap-3 rounded-lg'>
      {labels?.map((label: string, index: number) => {
        return (
          <li
            key={index}
            className={`py-2 text-center ${textColor[label]} ${backgroundColor[label]} hover:scale-110 rounded-full`}
          >
            <button>{label}</button>
          </li>
        );
      })}
    </ul>
  );
};

export default ListLabels;
