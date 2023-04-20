import Button from "../Buttons";
import CartWidget from "../CartWidget";
import "./navbar.css";
const NavBar = () => {
  return (
    <div className="navbar">
      <h1>Pablo Games</h1>
      <Button label="categoria1" className="primary" />
      <Button label="categoria2" className="secondary" />
      <Button label="categoria3" />
      <CartWidget />
    </div>
  );
};
export default NavBar;
