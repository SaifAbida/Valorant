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
        <div className="agent-role">
          {agent?.role.name} <img src={agent?.role.image} className="icon" alt="role-icon" />

        </div>
      </div>
    </div>
  );
};

export default Agent;
