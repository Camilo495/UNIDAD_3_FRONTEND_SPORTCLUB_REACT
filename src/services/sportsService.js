const API = "http://localhost:3000/api/sports";

export async function getSports() {
    const response = await fetch(API);
    const data = await response.json();
    return data.data;
}

export async function getSportById(id) {
    const response = await fetch(`${API}/${id}`);
    const data = await response.json();
    return data.data;
}

export async function createSport(sport) {
    const response = await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(sport),
    });

    return await response.json();
}

export async function updateSport(id, sport) {
    const response = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(sport),
    });

    return await response.json();
}

export async function deleteSport(id) {
    const response = await fetch(`${API}/${id}`, {
        method: "DELETE",
    });

    return await response.json();
}

export async function changeSportStatus(id, status) {
    const response = await fetch(`${API}/${id}/status`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
    });

    return await response.json();
}