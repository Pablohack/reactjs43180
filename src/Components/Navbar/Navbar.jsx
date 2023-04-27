import CartWidget from "../CartWidget";
import "./navbar.css";
export const NavBar = () => {
  return (
    <div className="navbar">
      <h1>Pablo Games</h1>
      <CartWidget />
    </div>
  );
};
