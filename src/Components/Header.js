//Header component
import { LOGO_LINK } from "../Utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("login");
  const handleBtn = () => {
    btnNameReact === "login"
      ? setBtnNameReact("logout")
      : setBtnNameReact("login");
  };
  const onlineStatus = useOnlineStatus();

  //Subscribe to the store using selector
  const cart = useSelector((store) => {
    return store.cart.items;
  });
  console.log(cart);
  return (
    <div className="flex justify-between bg-pink-300">
      <div className="logo-container">
        <img className=" w-48" src={LOGO_LINK} alt="logo" />
      </div>
      <div className=" flex items-center">
        <ul className="flex px-4 m-4">
          <li className="px-4">online status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>contact</Link>
          </li>
          <li className="px-4">
            <Link to={"/grocery"}>grocery</Link>
          </li>
          <li className="px-4">
            <Link to={"/cart"}>Cart-({cart.length}) items</Link>
          </li>
          <button className="loginBtn" onClick={handleBtn}>
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
