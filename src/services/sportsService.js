const API_URL = "http://localhost:3000/api/sports";

function getHeaders() {
    const token = localStorage.getItem("token");

    return {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    };
}

export async function getSports() {
    const response = await fetch(API_URL, {
        headers: getHeaders(),
    });

    if (!response.ok) {
        throw new Error("Error al obtener deportes");
    }

    return await response.json();
}

export async function createSport(sport) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify(sport),
    });

    if (!response.ok) {
        throw new Error("Error al crear deporte");
    }

    return await response.json();
}

export async function updateSport(id, sport) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: getHeaders(),
        body: JSON.stringify(sport),
    });

    if (!response.ok) {
        throw new Error("Error al actualizar deporte");
    }

    return await response.json();
}

export async function deleteSport(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: getHeaders(),
    });

    if (!response.ok) {
        throw new Error("Error al eliminar deporte");
    }

    return await response.json();
}