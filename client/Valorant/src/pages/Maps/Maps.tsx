import { useEffect, useState } from "react";
import "./Maps.css";
import { mapDocumentType } from "../../types";
import axios, { AxiosResponse } from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import MapDisplayCard from "../../components/MapDisplayCard/MapDisplayCard";

const Maps = () => {
  const [maps, setMaps] = useState<mapDocumentType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8080/map/")
      .then((res: AxiosResponse) => {
        setMaps(res.data);
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
    <div className="maps-container">
      {maps.map((map) => (
        <MapDisplayCard
          key={map._id}
          id={map._id}
          name={map.name}
          img={map.image}
        />
      ))}
    </div>
  );
};

export default Maps;
