import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbarStyles.css";

function Navigationbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id="navigationBar">
      <Container>
        <Navbar.Brand href="#home">
          <img src="" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Inicio</Nav.Link>
            <Nav.Link href="/team">Tu Equipo</Nav.Link>
            <Nav.Link href="/pokedex">Pokédex</Nav.Link>
            <Nav.Link href="/about">Acerca de</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navigationbar;