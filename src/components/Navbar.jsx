
import  {Navbar, Container,Nav, NavDropdown} from "react-bootstrap"
import "./Navbar.css"
import CartWidget from "./CartWidget";
import ItemCount from "./ItemCount";


export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
  <Container className="barra">
    <Navbar.Brand className="tituloPrincipal" href="/Home">Sofitel</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link className="dist" href="/Home">Home</Nav.Link>
        {/* <Nav.Link href="/Imagenes">Imagenes</Nav.Link> */}
        <Nav.Link className="dist" href="/Reservas">Reservas</Nav.Link>
        {/* <CartWidget /> */}
        <NavDropdown className="dist" title="Consultas" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">E-mail</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Whatsapp</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Instagram</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Opiniones</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
);
}
