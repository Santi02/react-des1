
import  {Navbar, Container,Nav, NavDropdown} from "react-bootstrap"
import CartWidget from "./CartWidget";


export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Zona Padel</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Productos</Nav.Link>
        <CartWidget />
        <NavDropdown title="Consultas" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">E-mail</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Whatsapp</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Opiniones</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Instagram</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
);
}