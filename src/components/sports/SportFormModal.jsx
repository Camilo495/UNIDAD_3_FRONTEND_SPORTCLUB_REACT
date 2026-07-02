import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const initialForm = {
  name: "",
  objective: "",
  duration: 60,
  status: true,
};

function SportFormModal({
  show,
  handleClose,
  handleSave,
  selectedSport,
}) {
  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    if (selectedSport) {
      setFormData({
        name: selectedSport.name || "",
        objective: selectedSport.objective || "",
        duration: selectedSport.duration || 60,
        status: selectedSport.status ?? true,
      });
    } else {
      setFormData(initialForm);
    }
  }, [selectedSport, show]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    handleSave(formData);
  }

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {selectedSport ? "Editar Deporte" : "Nuevo Deporte"}
        </Modal.Title>
      </Modal.Header>

      <Form onSubmit={onSubmit}>
        <Modal.Body>

          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Objetivo</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="objective"
              value={formData.objective}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Duración (minutos)</Form.Label>
            <Form.Control
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Check
            type="switch"
            label="Activo"
            name="status"
            checked={formData.status}
            onChange={handleChange}
          />

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>

          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default SportFormModal;
