import { Link, Outlet, useNavigate } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

import { logout, getUser } from "../services/authService";

import "./Layout.css";

function CoachLayout() {
  const navigate = useNavigate();
  const user = getUser();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <>
      <Navbar expand="lg" variant="dark" className="custom-navbar">
        <Container>
          <Navbar.Brand>SportClub Coach</Navbar.Brand>

          <Nav className="me-auto">
            <Link className="nav-link" to="/coach/dashboard">
              Dashboard
            </Link>

            <Link className="nav-link" to="#">
              Mis Alumnos
            </Link>

            <Link className="nav-link" to="#">
              Mis Clases
            </Link>

            <Link className="nav-link" to="#">
              Rutinas
            </Link>
          </Nav>

          <span className="user-name">{user?.full_name}</span>

          <Button
            variant="outline-light"
            className="logout-btn"
            onClick={handleLogout}
          >
            Cerrar sesión
          </Button>
        </Container>
      </Navbar>

      <Container fluid className="p-0">
        <Outlet />
      </Container>
    </>
  );
}

export default CoachLayout;
