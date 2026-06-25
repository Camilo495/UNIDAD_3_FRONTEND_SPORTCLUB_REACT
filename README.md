# SportClub React

## Descripción

SportClub es una aplicación web desarrollada con React y Vite que permite gestionar un club deportivo mediante diferentes roles de usuario.

El sistema cuenta con autenticación mediante JWT, dashboards personalizados y un módulo de administración para la gestión de usuarios.

---

## Tecnologías utilizadas

- React
- Vite
- React Router DOM
- React Bootstrap
- Bootstrap 5
- SweetAlert2
- React Icons
- Fetch API
- Node.js
- Express.js
- JWT (JSON Web Token)

---

## Funcionalidades

### Login
- Inicio de sesión.
- Validación de credenciales.
- Autenticación mediante JWT.

### Registro
- Registro de nuevos usuarios.
- Validación de datos.

### Dashboards

#### Usuario
- Dashboard personalizado.
- Perfil de usuario.
- Estadísticas.
- Reservas.
- Clases.

#### Coach
- Dashboard personalizado.
- Gestión de alumnos.
- Gestión de clases.
- Rutinas.
- Estadísticas.

#### Administrador
- Dashboard personalizado.
- Gestión de usuarios.
- Estadísticas del sistema.

---

## CRUD de Usuarios

El administrador puede realizar las siguientes acciones:

- Listar usuarios.
- Crear usuarios.
- Editar usuarios.
- Eliminar usuarios.

Las confirmaciones y mensajes del sistema fueron implementados utilizando SweetAlert2.

---

## Estructura del proyecto

```
src/
│
├── layouts/
├── pages/
│   ├── admin/
│   ├── coach/
│   └── user/
├── routes/
├── services/
├── App.jsx
└── main.jsx
```

---

## Instalación

Clonar el repositorio

```bash
git clone https://github.com/TU-USUARIO/UNIDAD_3_FRONTEND_SPORTCLUB_REACT.git
```

Entrar al proyecto

```bash
cd UNIDAD_3_FRONTEND_SPORTCLUB_REACT
```

Instalar dependencias

```bash
npm install
```

Ejecutar el proyecto

```bash
npm run dev
```

---

## Credenciales de prueba

Administrador

```
admin@demo.cl
```

Coach

```
coach@demo.cl
```

Usuario

```
user1@demo.cl
```

*(Las contraseñas dependen de la configuración del backend.)*

---

## Autor

Camilo Villalobos

Analista Programador

INACAP
