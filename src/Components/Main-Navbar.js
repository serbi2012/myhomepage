import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function MainNavbar() {
  return (
    <Navbar
      key={false}
      bg="dark"
      expand={false}
      variant="dark"
      className="mb-3"
      sticky="top"
    >
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={process.env.PUBLIC_URL + "/Images/Logo.png"}
            className="LogoIMG"
          ></img>
          RiAXO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${false}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
          placement="end"
        >
          <Offcanvas.Header closeButton className="Dark-Class">
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="Dark-Class">
            <Form className="d-flex mb-3">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Cart">Cart</Nav.Link>
              <Nav.Link href="/Portpolio">Portpolio</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export { MainNavbar };
