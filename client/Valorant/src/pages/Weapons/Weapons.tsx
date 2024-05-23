import "./Weapons.css";
import rifle from "../../assets/Rifle.webp";
import shotgun from "../../assets/Shotgun.webp";
import sidearm from "../../assets/Sidearm.webp";
import smg from "../../assets/SMG.webp";
import sinper from "../../assets/Sniper_Rifle.webp";
import machinegun from "../../assets/Machine_gun.webp";
import WeaponCard from "../../components/WeaponCard/WeaponCard";

const Weapons = () => {
  const types = [
    { name: "Sidearms", img: sidearm },
    { name: "SMGs", img: smg },
    { name: "Shotguns", img: shotgun },
    { name: "Rifles", img: rifle },
    { name: "Sniper-rifles", img: sinper },
    { name: "Machine-guns", img: machinegun },
  ];
  return (
    <div className="weapons-page">
      {types.map((type) => (
        <WeaponCard name={type.name} img={type.img} />
      ))}
    </div>
  );
};

export default Weapons;
