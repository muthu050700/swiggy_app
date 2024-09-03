import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../Utils/useResturantMenu";
import ResturatCategory from "./ResturatCategory";
const ResturantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);
  const { resId } = useParams();
  //custom hook for fetching the data
  const resInfo = useResturantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  const { name, costForTwoMessage, cuisines } = resInfo.cards[2].card.card.info;
  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  const category =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (value) =>
        value?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="my-10">
      <h1 className="text-center font-bold text-3xl pb-6">{name}</h1>
      <p className=" text-center font-medium text-lg">
        {cuisines.join(",")}- {costForTwoMessage}
      </p>
      {category.map((value, index) => {
        return (
          <ResturatCategory
            key={value.card.card.title}
            value={value}
            showItems={showIndex === index ? true : false}
            setShowIndex={() => {
              showIndex === index ? setShowIndex(null) : setShowIndex(index);
            }}
          />
        );
      })}
    </div>
  );
};
export default ResturantMenu;
