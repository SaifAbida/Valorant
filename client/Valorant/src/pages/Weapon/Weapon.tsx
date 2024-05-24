import { useNavigate, useParams } from "react-router-dom";
import "./Weapon.css";
import { useEffect, useState } from "react";
import { weaponDocumentType } from "../../types";
import axios, { AxiosResponse } from "axios";
import Swal from "sweetalert2";

const Weapon = () => {
  const { id } = useParams();
  const [weapon, setWeapon] = useState<weaponDocumentType>();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8080/weapon/${id}`)
      .then((res: AxiosResponse) => {
        setWeapon(res.data);
      })
      .catch(() => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Opps! something went wrong",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      });
  }, []);

  return (
    <div className="weaponContainer">
      <img src={weapon?.image} alt={weapon?.name} className="weapon-img" />
      <div className="weapon-info">
        <div className="weapon-details">
          <h1 className="weapon-name">{weapon?.name}</h1>
          <div>
            <span className="headers">Type : </span>
            {weapon?.type}
          </div>
          <div>
            <span className="headers">Credits : </span>
            {weapon?.credits} ¤
          </div>
          <div>
            <span className="headers">wall Penetration : </span>
            {weapon?.wall_Penetration}
          </div>
        </div>
        <div className="weapons-more-details">
          <div>
            <span className="headers">Magazine : </span>
            {weapon?.magazine}
          </div>
          <div>
            <span className="headers">Reserve : </span>
            {weapon?.reserve}
          </div>
          {weapon?.damage.map((d) => (
            <div>
              <span className="headers">Distance ( {d.distance} ) : </span>Head :{" "}
              {d.head} <span className="headers">|</span> Body : {d.body}{" "}
              <span className="headers">|</span> Leg : {d.leg}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Weapon;
