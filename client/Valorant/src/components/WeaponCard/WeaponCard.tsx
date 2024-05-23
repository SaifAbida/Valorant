import { Card } from "react-bootstrap";
import { CardProps } from "../../types";
import { Link } from "react-router-dom";
import "./WeaponCard.css";

const headerStyte = {
  color: "#fffbf5",
  fontFamily: "Bebas Neue",
  fontWeight: "bold",
  fontSize: "40px",
};

const cardStyle = {
  width: "500px",
  boxShadow: "2px 2px 30px rgba(0, 0, 0, 0.5)",
  cursor: "pointer",
};

const imgStyle = {
  width: "350px",
  transition: "all 0.3s",
  margin: "30px auto 30px 70px",
};

const WeaponCard = ({ img, name }: CardProps) => {
  return (
    <Card style={cardStyle}>
      <Link to={`/${name.toLocaleLowerCase()}`}>
        <Card.Img
          variant="top"
          src={img}
          style={imgStyle}
          className="cardImage"
        />
      </Link>
      <Card.Body style={{ backgroundColor: "#fa4454" }}>
        <Card.Text style={{ ...headerStyte, textAlign: "center" }}>
          {name}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WeaponCard;
