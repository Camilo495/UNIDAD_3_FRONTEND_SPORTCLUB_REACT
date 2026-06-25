import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaDumbbell,
  FaCalendarCheck,
  FaChartLine,
} from "react-icons/fa";

import { registerUser } from "../services/authService";

import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    console.log("ENTRÓ AL SUBMIT");

    if (!formData.terms) {
      return Swal.fire({
        icon: "warning",
        title: "Atención",
        text: "Debes aceptar los términos y condiciones.",
      });
    }

    if (formData.password !== formData.confirmPassword) {
      return Swal.fire({
        icon: "error",
        title: "Error",
        text: "Las contraseñas no coinciden.",
      });
    }

    try {
      await registerUser({
        full_name: formData.full_name,
        email: formData.email,
        password: formData.password,
      });

      await Swal.fire({
        icon: "success",
        title: "Cuenta creada",
        text: "Ahora puedes iniciar sesión.",
      });

      navigate("/login");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    }
  }

  return (
    <div className="register-page">
      <div className="register-card">
        <div className="register-form-section">
          <div className="register-brand">
            <div className="register-logo">SC</div>

            <h2>Crear Cuenta</h2>

            <p>Regístrate para comenzar a utilizar SportClub.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nombre Completo</label>

              <div className="input-group">
                <span className="input-group-text">
                  <FaUser />
                </span>

                <input
                  type="text"
                  name="full_name"
                  className="form-control register-input"
                  value={formData.full_name}
                  onChange={handleChange}
                  required
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
                  name="email"
                  className="form-control register-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
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
                  name="password"
                  className="form-control register-input"
                  value={formData.password}
                  onChange={handleChange}
                  required
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
                  name="confirmPassword"
                  className="form-control register-input"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="terms"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
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
              Gestiona tus entrenamientos y actividades deportivas
              desde un solo lugar.
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