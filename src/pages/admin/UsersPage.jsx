import { useEffect, useState } from "react";
import { Badge, Button, Card, Spinner, Table } from "react-bootstrap";
import Swal from "sweetalert2";

import UserFormModal from "../../components/users/UserFormModal";

import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../../services/userService";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  async function loadUsers() {
    try {
      setLoading(true);

      const response = await getUsers();

      setUsers(response.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  function openCreateModal() {
    setSelectedUser(null);
    setShowModal(true);
  }

  function openEditModal(user) {
    setSelectedUser(user);
    setShowModal(true);
  }

  function closeModal() {
    setSelectedUser(null);
    setShowModal(false);
  }

  async function handleSave(formData) {
    try {
      if (selectedUser) {
        await updateUser(selectedUser.id, formData);

        Swal.fire({
          icon: "success",
          title: "Usuario actualizado",
          text: "Los datos fueron actualizados correctamente.",
        });
      } else {
        await createUser(formData);

        Swal.fire({
          icon: "success",
          title: "Usuario creado",
          text: "El usuario fue creado correctamente.",
        });
      }

      closeModal();
      loadUsers();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    }
  }

  async function handleDelete(user) {
    const result = await Swal.fire({
      title: "¿Eliminar usuario?",
      text: `Se eliminará a ${user.full_name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#d33",
    });

    if (!result.isConfirmed) return;

    try {
      await deleteUser(user.id);

      Swal.fire({
        icon: "success",
        title: "Eliminado",
        text: "Usuario eliminado correctamente.",
      });

      loadUsers();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    }
  }
  return (
    <Card className="shadow-sm">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h4 className="mb-0">Gestión de Usuarios</h4>

        <Button variant="primary" onClick={openCreateModal}>
          Nuevo Usuario
        </Button>
      </Card.Header>

      <Card.Body>
        {loading ? (
          <div className="text-center p-4">
            <Spinner animation="border" />

            <p className="mt-3">Cargando usuarios...</p>
          </div>
        ) : (
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre Completo</th>
                <th>Correo</th>
                <th>Rol</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>

                    <td>{user.full_name}</td>

                    <td>{user.email}</td>

                    <td>
                      <Badge
                        bg={
                          user.role === "admin"
                            ? "danger"
                            : user.role === "coach"
                              ? "warning"
                              : "primary"
                        }
                      >
                        {user.role === "admin"
                          ? "Administrador"
                          : user.role === "coach"
                            ? "Coach"
                            : "Usuario"}
                      </Badge>
                    </td>

                    <td>
                      <Button
                        variant="warning"
                        size="sm"
                        className="me-2"
                        onClick={() => openEditModal(user)}
                      >
                        Editar
                      </Button>

                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(user)}
                      >
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">
                    No existen usuarios registrados.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        )}
      </Card.Body>

      <UserFormModal
        show={showModal}
        handleClose={closeModal}
        handleSave={handleSave}
        selectedUser={selectedUser}
      />
    </Card>
  );
}

export default UsersPage;
