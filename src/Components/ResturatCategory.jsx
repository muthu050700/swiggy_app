import ItemList from "./ItemList";

const ResturatCategory = (props) => {
  const data = props?.value?.card?.card;
  const showItems = props.showItems;
  const setShowIndex = props.setShowIndex;
  const setShowOneItem = props.setShowOneItem;
  const { itemCards } = data;

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className=" bg-gray-300 w-6/12 mx-auto text-center my-3 py-4 shadow-lg px-3">
      <div
        className=" flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-medium">
          {data.title} ({itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {showItems && <ItemList data={itemCards} usage={true} />}
    </div>
  );
};

export default ResturatCategory;
