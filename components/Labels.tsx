const Labels = ({
  onOpenLabel,
  openLabel,
  textColor,
  backgroundColor,
  handleAddLabels,
  card,
  listIndex,
  cardIndex,
  setLabels,
  labels,
  id,
}: any) => {
  return (
    <section className='grid sm:col-span-2 gap-5 text-xs'>
      <button
        className='py-2 pl-5 pr-16 sm:pl-5 sm:pr-0 text-left bg-add hover:bg-gray-200 rounded-lg'
        onClick={onOpenLabel}
      >
        Label
      </button>
      {openLabel && (
        <ul className='grid py-3 px-5 gap-3 bg-white rounded-lg'>
          <h4>Labels</h4>
          {[
            "Concept",
            "Technical",
            "Design",
            "Fullstack",
            "Frontend",
            "Priority",
          ].map((label: string, index: number) => {
            return (
              <li
                key={index}
                className={`p-2 text-center ${textColor[label]} ${backgroundColor[label]} hover:scale-110 rounded-full`}
              >
                <button
                  onClick={() =>
                    handleAddLabels(
                      card.labels,
                      label,
                      listIndex,
                      cardIndex,
                      setLabels,
                      labels,
                      id
                    )
                  }
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default Labels;
