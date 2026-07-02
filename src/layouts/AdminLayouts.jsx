import { Link, Outlet, useNavigate } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

import { logout, getUser } from "../services/authService";

import "./Layout.css";

function AdminLayout() {
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
          <Navbar.Brand>SportClub Admin</Navbar.Brand>

          <Nav className="me-auto">
            <Link className="nav-link" to="/admin/dashboard">
              Dashboard
            </Link>

            <Link className="nav-link" to="/admin/users">
              Usuarios
            </Link>
            <Link className="nav-link" to="/admin/sports">
            Deportes
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

      <Container className="mt-4">
        <Outlet />
      </Container>
    </>
  );
}

export default AdminLayout;
