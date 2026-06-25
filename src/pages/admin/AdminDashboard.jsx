import {
  FaUsers,
  FaUserTie,
  FaCalendarCheck,
  FaServer,
  FaArrowRight,
  FaChartLine,
  FaClipboardList,
  FaCheckCircle,
} from "react-icons/fa";

import { getUser } from "../../services/authService";

import "./AdminDashboard.css";

function AdminDashboard() {
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
          <h1>¡Hola {user?.full_name || "Administrador"}!</h1>

          <p>
            Bienvenido al Panel de Administración de SportClub. Desde aquí
            podrás gestionar usuarios, entrenadores, clases y supervisar el
            funcionamiento del sistema.
          </p>
        </div>

        <div className="dashboard-avatar">{initials}</div>
      </div>

      <div className="cards-grid">
        <div className="dashboard-card users">
          <div className="icon-circle">
            <FaUsers />
          </div>

          <h3>Usuarios</h3>

          <strong className="big-number">152</strong>

          <button>
            Gestionar
            <FaArrowRight />
          </button>
        </div>

        <div className="dashboard-card coaches">
          <div className="icon-circle">
            <FaUserTie />
          </div>

          <h3>Coaches</h3>

          <strong className="big-number">18</strong>

          <button>
            Ver Coaches
            <FaArrowRight />
          </button>
        </div>

        <div className="dashboard-card reservations">
          <div className="icon-circle">
            <FaCalendarCheck />
          </div>

          <h3>Reservas</h3>

          <strong className="big-number">64</strong>

          <button>
            Revisar
            <FaArrowRight />
          </button>
        </div>

        <div className="dashboard-card system">
          <div className="icon-circle">
            <FaServer />
          </div>

          <h3>Sistema</h3>

          <strong className="big-number">Activo</strong>

          <button>
            Estado
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="stats-section">
        <h2>
          <FaChartLine />
          Actividad Reciente
        </h2>

        <div className="activity-list">
          <div className="activity-item">
            <FaCheckCircle />
            Nuevo usuario registrado correctamente.
          </div>

          <div className="activity-item">
            <FaCheckCircle />
            Coach actualizado exitosamente.
          </div>

          <div className="activity-item">
            <FaCheckCircle />
            Nueva reserva creada.
          </div>

          <div className="activity-item">
            <FaCheckCircle />
            Sistema funcionando correctamente.
          </div>
        </div>
      </div>

      <div className="stats-section">
        <h2>
          <FaClipboardList />
          Accesos Rápidos
        </h2>

        <div className="quick-grid">
          <button className="quick-button">👥 Gestionar Usuarios</button>

          <button className="quick-button">🏋 Gestionar Coaches</button>

          <button className="quick-button">📅 Gestionar Clases</button>

          <button className="quick-button">⚙ Configuración</button>
        </div>
      </div>

      <footer className="dashboard-footer">
        <strong>SportClub © 2026</strong>

        <p>Panel Administrativo</p>
      </footer>
    </div>
  );
}

export default AdminDashboard;
