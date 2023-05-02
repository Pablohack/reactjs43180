import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Item.css";

export const Item = ({ img, description, title, stock, price }) => {
  return (
    <Card className="item">
      <Card.Img variant="top" src={img} className="item__img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="dark">Vamos al detalle</Button>
      </Card.Body>
    </Card>
  );
};
