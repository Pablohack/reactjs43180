import Cartwidget from "../Cartwidget";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
export const NavBar = ({ category }) => {
  return (
    <div className="navbar">
      <p className="navbar__title">PabloGames</p>
      <div className="navbar__category">
        {category.map((cat) => {
          return <Link to={`/category/${cat.id}`}>{cat.categoria}</Link>;
        })}
      </div>
      <Cartwidget />
    </div>
  );
};
