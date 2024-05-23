import "./Agents.css";
import controller from "../../assets/controller.webp";
import duelist from "../../assets/Dueliest.webp";
import initator from "../../assets/initiator.webp";
import sentinal from "../../assets/sentinal.webp";
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
