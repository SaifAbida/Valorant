import { useEffect, useState } from "react";
import "./SMGs.css";
import { weaponDocumentType } from "../../types";
import axios, { AxiosResponse } from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import WeaponDisplayCard from "../../components/WeaponDisplayCard/WeaponDisplayCard";

const SMGs = () => {
  const [weapons, setWeapons] = useState<weaponDocumentType[]>();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8080/weapon?type=SMG")
      .then((res: AxiosResponse) => {
        setWeapons(res.data);
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
    <div className="weapons-container">
      {weapons?.map((weapon) => (
        <WeaponDisplayCard
          key={weapon._id}
          id={weapon._id}
          name={weapon.name}
          img={weapon.image}
        />
      ))}
    </div>
  );
};

export default SMGs;