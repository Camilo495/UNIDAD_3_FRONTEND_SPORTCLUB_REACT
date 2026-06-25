import { useEffect, useState } from "react";
import { Badge, Button, Card, Spinner, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import { FaUsers, FaPlus, FaEdit, FaTrashAlt } from "react-icons/fa";

import UserFormModal from "../../components/users/UserFormModal";

import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../../services/userService";

import "./UsersPage.css";

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
      confirmButtonColor: "#dc3545",
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
    <div className="users-page">
      <div className="users-banner">
        <div>
          <h1>
            <FaUsers /> Gestión de Usuarios
          </h1>

          <p>
            Administra los usuarios registrados en SportClub. Desde aquí podrás
            crear, editar y eliminar cuentas.
          </p>
        </div>
      </div>

      <Card className="users-card shadow-lg">
        <Card.Header className="users-header">
          <h4>Usuarios Registrados</h4>

          <Button className="new-user-btn" onClick={openCreateModal}>
            <FaPlus />
            Nuevo Usuario
          </Button>
        </Card.Header>

        <Card.Body>
          {loading ? (
            <div className="text-center p-5">
              <Spinner animation="border" />

              <p className="mt-3">Cargando usuarios...</p>
            </div>
          ) : (
            <Table responsive hover className="users-table">
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
                              ? "dark"
                              : user.role === "coach"
                                ? "success"
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
                          <FaEdit /> Editar
                        </Button>

                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleDelete(user)}
                        >
                          <FaTrashAlt /> Eliminar
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
      </Card>

      <UserFormModal
        show={showModal}
        handleClose={closeModal}
        handleSave={handleSave}
        selectedUser={selectedUser}
      />
    </div>
  );
}

export default UsersPage;
