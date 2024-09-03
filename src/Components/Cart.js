import React from "react";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../Utils/cartSlicer";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearItems());
  };
  return (
    <div>
      {cartItems.length !== 0 ? (
        <div>
          <h1 className="text-center font-bold text-3xl py-5">Cart</h1>
          <div className="flex bg-gray-300 w-6/12 mx-auto text-center my-3 py-4 shadow-lg px-3">
            <ItemList data={cartItems} usage={false} />
          </div>
          <div className=" w-6/12 mx-auto flex justify-end">
            <button
              className="px-4 py-2 bg-black text-white"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-center font-bold text-3xl py-5">
            please add items to the cart...
          </h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
