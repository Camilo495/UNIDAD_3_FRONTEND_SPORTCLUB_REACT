import {
  FaUsers,
  FaCalendarAlt,
  FaClipboardList,
  FaArrowRight,
  FaChartLine,
  FaStar,
} from "react-icons/fa";

import { getUser } from "../../services/authService";

import "./CoachDashboard.css";

function CoachDashboard() {
  const user = getUser();

  const initials = user?.full_name
    ? user.full_name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .substring(0, 2)
        .toUpperCase()
    : "SC";

  return (
    <div className="dashboard-container">
      <div className="dashboard-banner">
        <div>
          <h1>¡Hola {user?.full_name || "Coach"}!</h1>

          <p>
            Administra tus clases, realiza seguimiento a tus alumnos y organiza
            tus entrenamientos.
          </p>
        </div>

        <div className="dashboard-avatar">{initials}</div>
      </div>

      <div className="cards-grid">
        <div className="dashboard-card students">
          <div className="icon-circle">
            <FaUsers />
          </div>

          <h3>Mis Alumnos</h3>

          <p>Consulta todos los alumnos asignados a tus clases.</p>

          <button>
            Ver Alumnos
            <FaArrowRight />
          </button>
        </div>

        <div className="dashboard-card classes">
          <div className="icon-circle">
            <FaCalendarAlt />
          </div>

          <h3>Mis Clases</h3>

          <p>Administra las clases programadas para hoy.</p>

          <button>
            Ver Clases
            <FaArrowRight />
          </button>
        </div>

        <div className="dashboard-card routines">
          <div className="icon-circle">
            <FaClipboardList />
          </div>

          <h3>Rutinas</h3>

          <p>Crea nuevas rutinas para tus alumnos.</p>

          <button>
            Crear Rutina
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="stats-section">
        <h2>
          <FaChartLine />
          Estadísticas
        </h2>

        <div className="stats-grid">
          <div className="stat-box">
            <span>Alumnos asignados</span>

            <strong>24</strong>
          </div>

          <div className="stat-box">
            <span>Clases de hoy</span>

            <strong>5</strong>
          </div>

          <div className="stat-box">
            <span>
              <FaStar />
              Evaluación promedio
            </span>

            <strong>4.9</strong>
          </div>

          <div className="stat-box">
            <span>Rutinas creadas</span>

            <strong>42</strong>
          </div>
        </div>
      </div>

      <footer className="dashboard-footer">
        <strong>SportClub © 2026</strong>

        <p>Panel del Entrenador</p>
      </footer>
    </div>
  );
}

export default CoachDashboard;
