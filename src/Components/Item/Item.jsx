import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Item.css";
import ItemCount from "../ItemCount/ItemCount";

export const Item = ({ image, Description, title, stock, price, id }) => {
  console.log({ image, Description, title, stock, price, id });
  return (
    <Card className="item">
      <Card.Img variant="top" src={image} className="item__img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{Description}</Card.Text>
        <Button variant="dark">
          <Link
            to={`/item/${id}`}
            state={{ image, title, Description, stock, price, id }}>
            Vamos al detalle
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
};
