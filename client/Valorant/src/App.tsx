import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Agents from "./pages/Agents/Agents";
import ControllersPage from "./pages/Controllers/ControllersPage";
import DuelistsPage from "./pages/Duelists/DuelistsPage";
import SentinelsPage from "./pages/Sentinels/SentinelsPage";
import InitiatorsPage from "./pages/Initiators/InitiatorsPage";
import Agent from "./pages/Agent/Agent";
import Weapons from "./pages/Weapons/Weapons";
import Sidearms from "./pages/Sidearms/Sidearms";
import Rifles from "./pages/Rifles/Rifles";
import SMGs from "./pages/SMGs/SMGs";
import Shotguns from "./pages/Shotguns/Shotguns";
import Snipers from "./pages/Snipers/Snipers";
import Machineguns from "./pages/Machineguns/Machineguns";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/controllers" element={<ControllersPage />} />
        <Route path="/duelists" element={<DuelistsPage />} />
        <Route path="/sentinels" element={<SentinelsPage />} />
        <Route path="/initiators" element={<InitiatorsPage />} />
        <Route path="/weapons" element={<Weapons />} />
        <Route path="/sidearms" element={<Sidearms />} />
        <Route path="/rifles" element={<Rifles />} />
        <Route path="/smgs" element={<SMGs />} />
        <Route path="/shotguns" element={<Shotguns />} />
        <Route path="/sniper-rifles" element={<Snipers />} />
        <Route path="/machine-guns" element={<Machineguns />} />
        <Route path="/agent/:id" element={<Agent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
