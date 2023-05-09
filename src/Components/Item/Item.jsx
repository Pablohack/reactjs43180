import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Item.css";
import ItemCount from "../ItemCount/ItemCount";

export const Item = ({ img, description, title, stock, price }) => {
  return (
    <Card className="item">
      <Card.Img variant="top" src={img} className="item__img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="dark">
          <Link
            to={"/item/1"}
            state={{ img, title, description, stock, price }}>
            Vamos al detalle
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
};
