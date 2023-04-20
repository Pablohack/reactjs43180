import "./Button.css";

const Button = ({ label, className }) => {
  return <button className={`button ${className}`}>{label}</button>;
};
export default Button;
