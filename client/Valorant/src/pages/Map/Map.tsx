import { useEffect, useState } from "react";
import { mapDocumentType } from "../../types";
import "./Map.css";
import axios, { AxiosResponse } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Map = () => {
  const [map, setMap] = useState<mapDocumentType>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8080/map/${id}`)
      .then((res: AxiosResponse) => {
        setMap(res.data);
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
    <div className="map-container">
      <img src={map?.mini_map} alt={map?.name} className="map-img" />
      <div className="map-info">
        <h1 className="map-name">{map?.name}</h1>
        <div>
          <span className="headers">Location : </span>
          {map?.location}
        </div>
        <div>
          <span className="headers">Spike sites : </span>
          {map?.spike_sites}
        </div>
        <div>
          <span className="headers">Added : </span>
          {map?.added}
        </div>
      </div>
    </div>
  );
};

export default Map;
