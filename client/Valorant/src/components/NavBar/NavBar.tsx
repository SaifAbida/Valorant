import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import img from "../../assets/valorant_logo_icon_249288.png";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="NavContainer">
      <Container>
        <Link to="/">
          <img src={img} className="logo-img" alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/agents">
              Agents
            </Link>
            <Link className="nav-link" to="/weapons">
              Weapons
            </Link>
            <Link className="nav-link" to="/maps">
              Maps
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
