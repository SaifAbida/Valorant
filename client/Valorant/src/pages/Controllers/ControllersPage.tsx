import { useEffect, useState } from "react";
import "./ControllersPage.css";
import { agentsDocumentType } from "../../types";
import axios, { AxiosResponse } from "axios";
import DisplayCard from "../../components/DisplayCard/DisplayCard";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ControllersPage = () => {
  const [agents, setAgents] = useState<agentsDocumentType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8080/agent?role.name=Controller")
      .then((res: AxiosResponse) => {
        setAgents(res.data);
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
    <div className="controllers-container">
      {agents.map((agent) => (
        <DisplayCard key={agent._id} id={agent._id} name={agent.code_name} img={agent.image} />
      ))}
    </div>
  );
};

export default ControllersPage;
