import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Agents from "./pages/Agents/Agents";
import ControllersPage from "./pages/Controllers/ControllersPage";
import DuelistsPage from "./pages/Duelists/DuelistsPage";
import SentinelsPage from "./pages/Sentinels/SentinelsPage";
import InitiatorsPage from "./pages/Initiators/InitiatorsPage";
import Agent from "./pages/Agent/Agent";

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
        <Route path="/agent/:id" element={<Agent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
