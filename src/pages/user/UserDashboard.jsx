import { Link } from "react-router-dom";

import {
  FaCalendarCheck,
  FaDumbbell,
  FaUserCircle,
  FaArrowRight,
  FaChartLine,
  FaUserTie,
} from "react-icons/fa";

import { getUser } from "../../services/authService";

import "./UserDashboard.css";

function UserDashboard() {
  const user = getUser();

  const initials = user?.full_name
    ? user.full_name
        .split(" ")
        .map((name) => name[0])
        .join("")
        .substring(0, 2)
        .toUpperCase()
    : "SC";

  return (
    <div className="dashboard-container">
      {/* Banner */}
      <div className="dashboard-banner">
        <div>
          <h1>¡Hola {user?.full_name || "Usuario"}!</h1>

          <p>
            Bienvenido nuevamente a SportClub. Gestiona tus reservas,
            clases y progreso deportivo desde un solo lugar.
          </p>
        </div>

        <div className="dashboard-avatar">{initials}</div>
      </div>

      {/* Tarjetas */}
      <div className="cards-grid">
        {/* Reservas */}
        <div className="dashboard-card reservations">
          <div className="icon-circle">
            <FaCalendarCheck />
          </div>

          <h3>Mis Reservas</h3>

          <p>
            Consulta todas tus reservas activas y revisa tus próximas
            clases.
          </p>

          <button>
            Ver Reservas
            <FaArrowRight />
          </button>
        </div>

        {/* Clases */}
        <div className="dashboard-card classes">
          <div className="icon-circle">
            <FaDumbbell />
          </div>

          <h3>Clases Disponibles</h3>

          <p>
            Explora las clases disponibles e inscríbete rápidamente.
          </p>

          <button>
            Ver Clases
            <FaArrowRight />
          </button>
        </div>

        {/* Perfil */}
        <div className="dashboard-card profile">
          <div className="icon-circle">
            <FaUserCircle />
          </div>

          <h3>Mi Perfil</h3>

          <p>
            Actualiza tus datos personales y revisa tu información.
          </p>

          <Link
            to="/perfil"
            className="dashboard-button profile-button"
          >
            Ir al Perfil
            <FaArrowRight />
          </Link>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="stats-section">
        <h2>
          <FaChartLine />
          Estadísticas
        </h2>

        <div className="stats-grid">
          <div className="stat-box">
            <span>Reservas activas</span>
            <strong>3</strong>
          </div>

          <div className="stat-box">
            <span>Clases completadas</span>
            <strong>18</strong>
          </div>

          <div className="stat-box">
            <span>Próxima clase</span>
            <strong>Yoga - 18:00</strong>
          </div>

          <div className="stat-box">
            <span>
              <FaUserTie />
              Coach asignado
            </span>

            <strong>Juan Pérez</strong>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="dashboard-footer">
        <strong>SportClub © 2026</strong>

        <p>Sistema de Gestión Deportiva</p>
      </footer>
    </div>
  );
}

export default UserDashboard;
