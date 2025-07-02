# Proyecto final

## Sistema de Gestión de Productos

Proyecto final para la materia de Programación. Consiste en una aplicación web fullstack para la gestion de productos dividida en dos partes:

- **Frontend:** React
- **Backend:** Node.js + Express + Sequelize + Joi + SQLite 
- **Base de datos:** SQLite
- **Arquitectura:** MVC con capas de modelo, servicio y repositorio
- **Contenedores:** Docker + Docker Compose

---

Funcionalidades: 
- CRUD basico
- Buscar / Filtrar: 
    - por nombre
    - por marca
    - por categoria
    - ordenar orden alfabetico y precio
    

## Estructura
```
product-management/
├── backend/
│   ├── config/
│   │   └── config.js
│   ├── controllers/
│   ├── models/
│   ├── schema/
│   ├── middlewares/
│   ├── repositories/
│   ├── services/
│   ├── routes/
│   ├── database/
│   │   └── index.js
│   ├── .env
│   ├── .env.example
│   ├── Dockerfile
│   ├── docker-compose.yml
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   ├── .env
│   ├── Dockerfile
│   └── package.json
└── README.md
```

## ⚙️ Requisitos

- Node.js (v18 o superior)
- npm
- Docker + Docker Compose (opcional, para contenedores)

---

## 🚀 Ejecutar sin Docker (modo local)

### 1. Backend

```bash
cd backend
npm install
cp .env.example .env
npx nodemon server.js
```

El backend corre por defecto en: http://localhost:3001

### 2. Frontend
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

El frontend corre por defecto en: http://localhost:3000

## 🐳 Ejecutar con Docker

```bash
Desde la raíz del proyecto:

docker-compose up --build
```

- Frontend: http://localhost:3000

- Backend: http://localhost:3001/api/products


## 🧪 API Endpoints

| Método | Ruta                | Descripción                 |
| ------ | ------------------- | --------------------------- |
| GET    | `/api/products`     | Obtener todos los productos |
| GET    | `/api/products/:id` | Obtener un producto por ID  |
| POST   | `/api/products`     | Crear un nuevo producto     |
| PUT    | `/api/products/:id` | Actualizar un producto      |
| DELETE | `/api/products/:id` | Eliminar un producto        |


## 📦 Variables de Entorno
Backend (backend/.env)
```
env

PORT= ''
DATABASE_STORAGE= ''
```

Frontend (frontend/.env)
```
env


VITE_API_URL= ''
```

**Nota**: Usar .env.example como plantilla.


## Autor

**Dario Coletto**