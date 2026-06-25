import { Link } from "react-router-dom";
import {
  FaUsers,
  FaDumbbell,
  FaUserShield,
  FaArrowRight,
} from "react-icons/fa";

import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>SportClub</h1>

          <p>
            Plataforma web para la gestión de un club deportivo. Administra
            usuarios, entrenadores, clases y reservas desde una única
            aplicación.
          </p>

          <div className="hero-buttons">
            <Link to="/login" className="btn-login">
              Iniciar Sesión
            </Link>

            <Link to="/register" className="btn-register">
              Registrarse
            </Link>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>¿Qué ofrece SportClub?</h2>

        <div className="features-grid">
          <div className="feature-card">
            <FaUsers className="feature-icon" />

            <h3>Usuarios</h3>

            <p>
              Gestiona información de los usuarios y administra sus cuentas.
            </p>
          </div>

          <div className="feature-card">
            <FaDumbbell className="feature-icon" />

            <h3>Entrenadores</h3>

            <p>Organiza clases, rutinas y realiza seguimiento a los alumnos.</p>
          </div>

          <div className="feature-card">
            <FaUserShield className="feature-icon" />

            <h3>Administración</h3>

            <p>
              Panel administrativo con CRUD de usuarios y control del sistema.
            </p>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <strong>SportClub © 2026</strong>

        <p>Sistema SPA desarrollado con React + Vite</p>
      </footer>
    </div>
  );
}

export default Home;
