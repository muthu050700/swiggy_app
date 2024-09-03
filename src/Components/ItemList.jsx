import React from "react";
import { CDN_LINK } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addItems } from "../Utils/cartSlicer";

const ItemList = ({ data, usage }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };
  return (
    <div>
      {data.map((value) => {
        return (
          <div
            key={value.card.info.id}
            className=" text-left border-b-4 flex flex-col gap-4 pb-8"
          >
            <div className="flex gap-8 justify-between mt-4 w-fit">
              <div>
                <span className="font-medium text-lg">
                  {value.card.info.name}{" "}
                </span>
                <span className=" mt-1 text-base font-bold ">
                  - ₹{" "}
                  {value.card.info.price / 100 ||
                    value.card.info.defaultPrice / 100}
                </span>
                <p className="text-sm text-gray-600 w-[550px] text-justify pt-3">
                  {value.card.info.description}
                </p>
              </div>
              <div>
                <div className="relative w-fit">
                  <div className=" absolute top-[83%] left-[20%] right-[50%]">
                    {usage && (
                      <button
                        className="bg-white px-3 py-1 rounded-md text-lg font-medium w-[100px]"
                        onClick={() => {
                          handleAddItem(value);
                        }}
                      >
                        Add +
                      </button>
                    )}
                  </div>
                  <img
                    src={CDN_LINK + value.card.info.imageId}
                    className=" w-[150px] h-[100px] object-cover "
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
