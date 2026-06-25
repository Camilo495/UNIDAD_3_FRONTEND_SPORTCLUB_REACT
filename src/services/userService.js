const API_URL = "http://localhost:3000/api/users";

function getHeaders() {
    const token = localStorage.getItem("token");

    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    };
}

export async function getUsers() {
    const response = await fetch(API_URL, {
        headers: getHeaders(),
    });

    if (!response.ok) {
        throw new Error("Error al obtener usuarios");
    }

    return await response.json();
}

export async function createUser(user) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify(user),
    });

    if (!response.ok) {
        throw new Error("Error al crear usuario");
    }

    return await response.json();
}

export async function updateUser(id, user) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: getHeaders(),
        body: JSON.stringify(user),
    });

    if (!response.ok) {
        throw new Error("Error al actualizar usuario");
    }

    return await response.json();
}

export async function deleteUser(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: getHeaders(),
    });

    if (!response.ok) {
        throw new Error("Error al eliminar usuario");
    }

    return await response.json();
}