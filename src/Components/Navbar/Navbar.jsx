import Cartwidget from "../Cartwidget";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
export const NavBar = () => {
  return (
    <div className="navbar">
      <p className="navbar__title">PabloGames</p>
      <div className="navbar__category">
        <Link to={"/"}>Home</Link>
        <Link to={"/category/1"}>PS4</Link>
        <Link to={"/category/2"}>XBOX ONE</Link>
        <Link to={"/category/3"}>NINTENDO SWITCH</Link>
      </div>
      <Cartwidget />
    </div>
  );
};
