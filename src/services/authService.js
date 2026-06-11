const API_URL = "http://localhost:3000/api/auth"

export async function loginUser(data) {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  const result = await response.json()

  if (!response.ok) {
    throw new Error(result.message || "Error al iniciar sesión")
  }

  return result.data
}