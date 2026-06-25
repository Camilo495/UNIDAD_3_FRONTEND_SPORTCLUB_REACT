import { Link } from "react-router-dom";

import {
  FaUserCircle,
  FaEnvelope,
  FaUserTag,
  FaCalendarAlt,
  FaCheckCircle,
  FaEdit,
  FaLock,
  FaArrowLeft,
} from "react-icons/fa";

import Swal from "sweetalert2";

import { getUser } from "../../services/authService";

import "./Profile.css";

function Profile() {
  const user = getUser();

  const initials = user?.full_name
    ? user.full_name
        .split(" ")
        .map((name) => name[0])
        .join("")
        .substring(0, 2)
        .toUpperCase()
    : "SC";

  function editProfile() {
    Swal.fire({
      icon: "info",
      title: "Próximamente",
      text: "La edición del perfil estará disponible en una próxima versión.",
    });
  }

  function changePassword() {
    Swal.fire({
      icon: "info",
      title: "Próximamente",
      text: "El cambio de contraseña estará disponible próximamente.",
    });
  }

  return (
    <div className="profile-container">
      {/* Banner */}
      <div className="profile-banner">
        <div>
          <h1>Mi Perfil</h1>

          <p>
            Consulta tu información personal y administra tu cuenta de
            SportClub.
          </p>
        </div>

        <div className="profile-avatar">{initials}</div>
      </div>

      {/* Botón volver */}
      <div className="back-container">
        <Link to="/user/dashboard" className="back-button">
          <FaArrowLeft />
          Volver al Dashboard
        </Link>
      </div>

      {/* Información del perfil */}
      <div className="profile-card">
        <div className="profile-photo">
          <FaUserCircle />

          <h2>{user?.full_name || "Usuario"}</h2>

          <span>
            {user?.role === "admin"
              ? "Administrador"
              : user?.role === "coach"
              ? "Coach"
              : "Usuario"}
          </span>
        </div>

        <div className="profile-info">
          <div className="info-item">
            <FaUserTag className="info-icon" />

            <div>
              <small>Nombre Completo</small>

              <strong>{user?.full_name}</strong>
            </div>
          </div>

          <div className="info-item">
            <FaEnvelope className="info-icon" />

            <div>
              <small>Correo Electrónico</small>

              <strong>{user?.email}</strong>
            </div>
          </div>

          <div className="info-item">
            <FaUserTag className="info-icon" />

            <div>
              <small>Rol</small>

              <strong>
                {user?.role === "admin"
                  ? "Administrador"
                  : user?.role === "coach"
                  ? "Coach"
                  : "Usuario"}
              </strong>
            </div>
          </div>

          <div className="info-item">
            <FaCheckCircle className="info-icon success" />

            <div>
              <small>Estado</small>

              <strong className="status-active">Activo</strong>
            </div>
          </div>

          <div className="info-item">
            <FaCalendarAlt className="info-icon" />

            <div>
              <small>Miembro desde</small>

              <strong>2026</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Acciones */}
      <div className="actions-card">
        <h3>Acciones de Cuenta</h3>

        <div className="buttons">
          <button className="edit-btn" onClick={editProfile}>
            <FaEdit />
            Editar Perfil
          </button>

          <button className="password-btn" onClick={changePassword}>
            <FaLock />
            Cambiar Contraseña
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;