import Cartwidget from "../Cartwidget";
import "./navbar.css";
export const NavBar = () => {
  return (
    <div className="navbar">
      <p className="navbar__title">PabloGames</p>
      <Cartwidget />
    </div>
  );
};
