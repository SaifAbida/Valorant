import "./Agents.css";
import controller from "../../assets/controller.jpg";
import duelist from "../../assets/Dueliest.jpg";
import initator from "../../assets/initiator.png";
import sentinal from "../../assets/sentinal.jpg";
import CardComponent from "../../components/Card/CardComponent";

const Agents = () => {
  const roles = [
    { name: "Controllers", img: controller },
    { name: "Initiators", img: initator },
    { name: "Duelists", img: duelist },
    { name: "Sentinels", img: sentinal },
  ];
  return (
    <div className="agents-page">
      {roles.map((role) => (
        <CardComponent name={role.name} img={role.img} />
      ))}
    </div>
  );
};

export default Agents;
