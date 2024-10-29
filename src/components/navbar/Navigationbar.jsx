import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



//Estilos css
import "./navbarStyles.css";
//Imagen
import Logo from "../../assets/images/Logo.png"

function Navigationbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id="navigationBar">
      <Container>
        <Navbar.Brand href="/">
          <img src= { Logo } alt="" className='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
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