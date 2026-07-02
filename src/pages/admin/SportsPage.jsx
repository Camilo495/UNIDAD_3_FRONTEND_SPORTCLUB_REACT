import { useEffect, useState } from "react";
import { Badge, Button, Card, Spinner, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import { FaUsers, FaPlus, FaEdit, FaTrashAlt } from "react-icons/fa";

import SportFormModal from "../../components/sports/SportFormModal";

import {
    createSport,
    deleteSport,
    getSports,
    updateSport,
} from "../../services/sportsService";

function SportsPage() {
    const [sports, setSports] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [selectedSport, setSelectedSport] = useState(null);

    async function loadSports() {
        try {
            setLoading(true);

            const response = await getSports();

            setSports(response.data);
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: error.message,
            });
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadSports();
    }, []);

    function openCreateModal() {
        setSelectedSport(null);
        setShowModal(true);
    }

    function openEditModal(sport) {
        setSelectedSport(sport);
        setShowModal(true);
    }

    function closeModal() {
        setSelectedSport(null);
        setShowModal(false);
    }

    async function handleSave(formData) {
        try {
            if (selectedSport) {
                await updateSport(selectedSport.id, formData);

                Swal.fire({
                    icon: "success",
                    title: "Deporte actualizado",
                    text: "Los datos fueron actualizados correctamente.",
                });
            } else {
                await createSport(formData);

                Swal.fire({
                    icon: "success",
                    title: "Deporte creado",
                    text: "El deporte fue creado correctamente.",
                });
            }

            closeModal();
            loadSports();
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: error.message,
            });
        }
    }

    async function handleDelete(sport) {
        const result = await Swal.fire({
            title: "¿Eliminar deporte?",
            text: `Se eliminará ${sport.name}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#dc3545",
        });

        if (!result.isConfirmed) return;

        try {
            await deleteSport(sport.id);

            Swal.fire({
                icon: "success",
                title: "Eliminado",
                text: "Deporte eliminado correctamente.",
            });

            loadSports();
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: error.message,
            });
        }
    }

    return (
        <div className="users-page">
            <div className="users-banner">
                <div>
                    <h1>
                        <FaUsers /> Gestión de Deportes
                    </h1>

                    <p>
                        Administra los deportes registrados en SportClub.
                        Desde aquí podrás crear, editar y eliminar deportes.
                    </p>
                </div>
            </div>

            <Card className="users-card shadow-lg">
                <Card.Header className="users-header">
                    <h4>Deportes Registrados</h4>

                    <Button
                        className="new-user-btn"
                        onClick={openCreateModal}
                    >
                        <FaPlus /> Nuevo Deporte
                    </Button>
                </Card.Header>

                <Card.Body>
                    {loading ? (
                        <div className="text-center p-5">
                            <Spinner animation="border" />
                            <p className="mt-3">
                                Cargando deportes...
                            </p>
                        </div>
                    ) : (
                        <Table responsive hover className="users-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Objetivo</th>
                                    <th>Duración</th>
                                    <th>Estado</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>

                            <tbody>
                                {sports.length > 0 ? (
                                    sports.map((sport) => (
                                        <tr key={sport.id}>
                                            <td>{sport.id}</td>

                                            <td>{sport.name}</td>

                                            <td>{sport.objective}</td>

                                            <td>{sport.duration} min</td>

                                            <td>
                                                <Badge
                                                    bg={
                                                        sport.status
                                                            ? "success"
                                                            : "secondary"
                                                    }
                                                >
                                                    {sport.status
                                                        ? "Activo"
                                                        : "Inactivo"}
                                                </Badge>
                                            </td>

                                            <td>
                                                <Button
                                                    variant="warning"
                                                    size="sm"
                                                    className="me-2"
                                                    onClick={() =>
                                                        openEditModal(sport)
                                                    }
                                                >
                                                    <FaEdit /> Editar
                                                </Button>

                                                <Button
                                                    variant="danger"
                                                    size="sm"
                                                    onClick={() =>
                                                        handleDelete(sport)
                                                    }
                                                >
                                                    <FaTrashAlt /> Eliminar
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="6"
                                            className="text-center"
                                        >
                                            No existen deportes registrados.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    )}
                </Card.Body>
            </Card>

            <SportFormModal
                show={showModal}
                handleClose={closeModal}
                handleSave={handleSave}
                selectedSport={selectedSport}
            />
        </div>
    );
}

export default SportsPage;
