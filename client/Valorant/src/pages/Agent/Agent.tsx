import { useNavigate, useParams } from "react-router-dom";
import "./Agent.css";
import { useEffect, useState } from "react";
import { agentsDocumentType } from "../../types";
import axios, { AxiosResponse } from "axios";
import Swal from "sweetalert2";

const Agent = () => {
  const { id } = useParams();
  const [agent, setAgent] = useState<agentsDocumentType>();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8080/agent/${id}`)
      .then((res: AxiosResponse) => {
        setAgent(res.data);
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
    <div className="agentContainer">
      <img className="agent-img" src={agent?.image} alt="agent-img" />
      <div className="agent-info">
        <h1 className="agent-name">{agent?.code_name}</h1>
        <div className="agent-description">
          <div>
            {" "}
            {agent?.role.name}{" "}
            <img src={agent?.role.image} className="icon" alt="role-icon" />
          </div>
          <div><span className="headers">Passive : </span>{agent?.passives}</div>
          <div>
            {agent?.basic_abilities.map((ability) => (
              <div>
                <span>{ability.name}</span>
                {"  "}
                <img src={ability.image} alt="ability" className="icon" />
              </div>
            ))}
          </div>
          <div>
            <span>{agent?.signature_ability.name}</span>
            {"  "}
            <img
              src={agent?.signature_ability.image}
              alt="ability"
              className="icon"
            />
          </div>
          <div>
            <span>{agent?.ultimate_ability.name}</span>
            {"  "}
            <img
              src={agent?.ultimate_ability.image}
              alt="ability"
              className="icon"
            />
          </div>
        </div>
      </div>
      <div className="more-details">
        <div><span className="headers">Real name : </span>{agent?.real_name}</div>
        <div><span className="headers">Origin : </span>{agent?.origin}</div>
        <div><span className="headers">Voice actor : </span>{agent?.voice_actor}</div>
      </div>
    </div>
  );
};

export default Agent;
