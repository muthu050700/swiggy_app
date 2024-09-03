import { useEffect, useState } from "react";
import { RESTURANT_API } from "../Utils/constant";
const useBodyResturantMenu = () => {
  const [restaurants, setResturants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RESTURANT_API);
    const json = await data.json();
    setResturants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  return restaurants;
};

export default useBodyResturantMenu;
