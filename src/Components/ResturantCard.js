//ResturantCard
import { CDN_LINK } from "../Utils/constant";
const ResturantCard = (props) => {
  const { data } = props;
  const { name, costForTwo, cuisines, avgRating, sla } = data?.info;

  return (
    <div className="p-4 w-[350px] h-[450px] bg-gray-200 rounded-xl flex flex-col gap-3">
      <div>
        <img
          className=" rounded-lg"
          src={CDN_LINK + props.data.info.cloudinaryImageId}
          alt="img"
        />
      </div>
      <h3 className="font-bold">{name}</h3>
      <p>{costForTwo}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating} rating</p>
      <p>{sla?.deliveryTime} minutes</p>
    </div>
  );
};

export const withResturantOpen = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label className=" absolute bg-black text-lg font-medium text-white px-2 py-1 rounded-lg">
          Open
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
