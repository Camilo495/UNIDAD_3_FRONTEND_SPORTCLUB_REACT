import {
  FaUsers,
  FaCalendarAlt,
  FaClipboardList,
  FaArrowRight,
  FaChartLine,
  FaStar,
  FaHeartbeat,
  FaDumbbell,
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
      {/* Banner */}

      <div className="dashboard-banner">
        <div>
          <h1>¡Hola {user?.full_name || "Coach"}!</h1>

          <p>
            Bienvenido al panel del entrenador. Administra tus alumnos, clases,
            rutinas y realiza seguimiento del rendimiento deportivo.
          </p>
        </div>

        <div className="dashboard-avatar">{initials}</div>
      </div>

      {/* Cards */}

      <div className="cards-grid">
        <div className="dashboard-card students">
          <div className="icon-circle">
            <FaUsers />
          </div>

          <h3>Mis Alumnos</h3>

          <p>
            Actualmente tienes <strong>24 alumnos activos</strong> bajo tu
            supervisión.
          </p>

          <button>
            Ver Alumnos
            <FaArrowRight />
          </button>
        </div>

        <div className="dashboard-card classes">
          <div className="icon-circle">
            <FaCalendarAlt />
          </div>

          <h3>Clases Programadas</h3>

          <p>
            Hoy tienes <strong>5 clases</strong> programadas para impartir.
          </p>

          <button>
            Ver Horario
            <FaArrowRight />
          </button>
        </div>

        <div className="dashboard-card routines">
          <div className="icon-circle">
            <FaClipboardList />
          </div>

          <h3>Rutinas</h3>

          <p>Gestiona las rutinas personalizadas de todos tus alumnos.</p>

          <button>
            Administrar Rutinas
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Estadísticas */}

      <div className="stats-section">
        <h2>
          <FaChartLine />
          Resumen General
        </h2>

        <div className="stats-grid">
          <div className="stat-box">
            <FaUsers className="stat-icon" />

            <span>Alumnos Activos</span>

            <strong>24</strong>
          </div>

          <div className="stat-box">
            <FaCalendarAlt className="stat-icon" />

            <span>Clases Hoy</span>

            <strong>5</strong>
          </div>

          <div className="stat-box">
            <FaStar className="stat-icon" />

            <span>Evaluación Promedio</span>

            <strong>4.9</strong>
          </div>

          <div className="stat-box">
            <FaDumbbell className="stat-icon" />

            <span>Rutinas Activas</span>

            <strong>42</strong>
          </div>
        </div>
      </div>

      {/* Actividad */}

      <div className="stats-section">
        <h2>
          <FaHeartbeat />
          Actividad Reciente
        </h2>

        <div className="activity-list">
          <div className="activity-item">
            ✅ Se registró una nueva asistencia.
          </div>

          <div className="activity-item">✅ Rutina de fuerza actualizada.</div>

          <div className="activity-item">✅ Nuevo alumno asignado.</div>

          <div className="activity-item">✅ Clase de CrossFit finalizada.</div>
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
