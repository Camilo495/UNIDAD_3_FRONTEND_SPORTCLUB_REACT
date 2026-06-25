import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { loginUser } from "../services/authService"
import "./Login.css"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    setError("")
    setLoading(true)

    try {
      const data = await loginUser({
        email,
        password,
      })

      localStorage.setItem("token", data.token)
      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      )

      if (data.user.role === "admin") {
        navigate("/admin/dashboard")
      } else if (data.user.role === "coach") {
        navigate("/coach/dashboard")
      } else {
        navigate("/user/dashboard")
      }

    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-brand">
          <div className="login-logo">SC</div>

          <h2>SportClub</h2>

          <p>
            Accede a tu cuenta para gestionar tus
            clases y reservas.
          </p>
        </div>

        {error && (
          <div className="alert alert-danger">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label">
              Correo electrónico
            </label>

            <input
              type="email"
              className="form-control login-input"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">
              Contraseña
            </label>

            <input
              type="password"
              className="form-control login-input"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />
          </div>

          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >
            {loading
              ? "Ingresando..."
              : "Iniciar sesión"}
          </button>

        </form>

        <div className="login-footer">
          <span>¿No tienes cuenta?</span>

          <Link to="/register">
            {" "}Crear cuenta
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
