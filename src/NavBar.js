

    import  {Navbar, Container,Nav, NavDropdown} from "react-bootstrap"

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home" className="me-auto1">Logo</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Productos</Nav.Link>
        <NavDropdown title="Mas" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">E-mail</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Whatsapp</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Instagram</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
);
}