//Body Component
import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { RESTURANT_API } from "../Utils/constant";
import useBodyResturantMenu from "../Utils/useBodyResturantMenu";
import { withResturantOpen } from "./ResturantCard";

const Body = () => {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const restaurants = useBodyResturantMenu();
  const fetchData = async () => {
    const fetchData = await fetch(RESTURANT_API);
    const jsonData = await fetchData.json();
    console.log(jsonData);
    setListOfResturants(
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  console.log("body rendered");
  const handleFilter = () => {
    const filterData = listOfResturants.filter((res) => {
      return res.info.avgRating >= 4;
    });
    setListOfResturants(filterData);
  };
  const handleSearch = () => {
    const filteredResturents = restaurants.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setListOfResturants(filteredResturents);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>you're offline, please check your connection; </h1>;
  }
  const OpenResturant = withResturantOpen(ResturantCard);
  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="search flex py-10">
        <div>
          <input
            type="text"
            value={"hello"}
            className=" border border-solid border-black py-1"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 ml-4 bg-green-400 rounded-lg"
            onClick={() => {
              handleSearch();
            }}
          >
            Search
          </button>
        </div>
        <button
          className="px-4 py-1 ml-4 bg-green-400 rounded-lg"
          onClick={handleFilter}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-20">
        {listOfResturants.map((resturant) => (
          <Link
            key={resturant.info.id}
            to={"/resturantmenu/" + resturant.info.id}
          >
            {resturant.info.isOpen ? (
              <OpenResturant data={resturant} />
            ) : (
              <ResturantCard data={resturant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
