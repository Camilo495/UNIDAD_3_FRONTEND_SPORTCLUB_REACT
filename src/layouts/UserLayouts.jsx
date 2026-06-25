import { Link, Outlet, useNavigate } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

import { logout, getUser } from "../services/authService";

function UserLayout() {
  const navigate = useNavigate();
  const user = getUser();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand>SportClub</Navbar.Brand>

          <Nav className="me-auto">
            <Link className="nav-link" to="/user/dashboard">
              Dashboard
            </Link>

            <Link className="nav-link" to="/perfil">
              Mi Perfil
            </Link>
          </Nav>

          <span className="text-white me-3">{user?.full_name}</span>

          <Button variant="outline-light" onClick={handleLogout}>
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

export default UserLayout;
