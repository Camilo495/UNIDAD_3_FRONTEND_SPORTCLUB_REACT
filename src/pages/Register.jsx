import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaDumbbell,
  FaCalendarCheck,
  FaChartLine,
} from "react-icons/fa";

import "./Register.css";

function Register() {
  return (
    <div className="register-page">
      <div className="register-card">

        <div className="register-form-section">

          <div className="register-brand">
            <div className="register-logo">SC</div>

            <h2>Crear Cuenta</h2>

            <p>
              Regístrate para comenzar a utilizar SportClub.
            </p>
          </div>

          <form>

            <div className="mb-3">
              <label className="form-label">Nombre Completo</label>

              <div className="input-group">
                <span className="input-group-text">
                  <FaUser />
                </span>

                <input
                  type="text"
                  className="form-control register-input"
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Correo Electrónico</label>

              <div className="input-group">
                <span className="input-group-text">
                  <FaEnvelope />
                </span>

                <input
                  type="email"
                  className="form-control register-input"
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Contraseña</label>

              <div className="input-group">
                <span className="input-group-text">
                  <FaLock />
                </span>

                <input
                  type="password"
                  className="form-control register-input"
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">
                Confirmar Contraseña
              </label>

              <div className="input-group">
                <span className="input-group-text">
                  <FaLock />
                </span>

                <input
                  type="password"
                  className="form-control register-input"
                />
              </div>
            </div>

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="terms"
              />

              <label
                className="form-check-label"
                htmlFor="terms"
              >
                Acepto los términos y condiciones
              </label>
            </div>

            <button
              type="submit"
              className="register-button"
            >
              Crear Cuenta
            </button>

          </form>

          <div className="register-footer">
            <span>¿Ya tienes cuenta?</span>

            <Link to="/login">
              Iniciar sesión
            </Link>
          </div>

        </div>

        <div className="register-info-section">

          <div className="info-content">

            <h2>Bienvenido a SportClub</h2>

            <p>
              Gestiona tus entrenamientos y actividades
              deportivas desde un solo lugar.
            </p>

            <div className="feature">
              <FaDumbbell />
              <span>Reserva clases deportivas</span>
            </div>

            <div className="feature">
              <FaCalendarCheck />
              <span>Controla tus horarios</span>
            </div>

            <div className="feature">
              <FaChartLine />
              <span>Haz seguimiento de tu progreso</span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Register;