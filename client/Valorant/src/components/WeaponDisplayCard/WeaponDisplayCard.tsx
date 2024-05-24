import { Card } from "react-bootstrap";
import { CardDisplayProps } from "../../types";
import { Link } from "react-router-dom";
import "./WeaponDisplayCard.css";

const headerStyte = {
  color: "#fa4454",
  fontFamily: "Bebas Neue",
  fontWeight: "bold",
  fontSize: "40px",
};

const cardStyle = {
  width: "500px",
  boxShadow: "2px 2px 30px rgba(0, 0, 0, 0.5)",
  cursor: "pointer",
  backgroundColor: "#fffbf5"
};

const imgStyle = {
  width: "350px",
  transition: "all 0.3s",
  margin: "30px auto 30px 70px",
};

const WeaponCard = ({ img, name, id }: CardDisplayProps) => {
  return (
    <Card style={cardStyle}>
      <Link to={`/weapon/${id}`}>
        <Card.Img
          variant="top"
          src={img}
          style={imgStyle}
          className="cardImage"
        />
      </Link>
      <Card.Body>
        <Card.Text style={{ ...headerStyte, textAlign: "center" }}>
          {name}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WeaponCard;
