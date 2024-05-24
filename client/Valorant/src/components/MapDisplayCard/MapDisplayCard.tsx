import { Card } from "@mui/material";
import { CardContent, CardMedia, Typography } from "@mui/material";
import { CardDisplayProps } from "../../types";
import { Link } from "react-router-dom";
import "./MapDisplayCard.css"

const headerStyte = {
  color: "#fffbf5",
  fontFamily: "Bebas Neue",
  fontWeight: "bold",
  fontSize: "40px",
};

const cardStyle = {
  width: "350px",
  boxShadow: "2px 2px 30px rgba(0, 0, 0, 0.5)",
  cursor: "pointer",
};

const imgStyle = {
  height: "350px",
  transition: "all 0.3s",
};

const MapDisplayCard = ({ img, name, id }: CardDisplayProps) => {
  return (
    <Card style={cardStyle} className="DisplayContainer">
      <Link to={`/map/${id}`}>
        <CardMedia
          style={imgStyle}
          image={img}
          title={name}
          className="cardImage"
        />
      </Link>
      <CardContent style={{ backgroundColor: "#141414" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="role-name"
          style={{ ...headerStyte, textAlign: "center" }}
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MapDisplayCard;
