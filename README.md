Documentación del Proyecto: Sistema de Control de Aeronaves
Este proyecto es un backend desarrollado para gestionar y monitorear aeronaves cercanas a una torre de control, con validación de datos y alertas de colisión.

🚀 Tecnologías Utilizadas
Node.js (Entorno de ejecución JavaScript)

Express (Framework para API REST)

Postman (Pruebas de endpoints)

Git (Control de versiones)

📋 Funcionalidades Principales
Registro/Actualización de Aeronaves:

Valida ID (formato 3 letras + 3 números, ej: ABC123).

Verifica coordenadas numéricas (x, y, z).

Listado de Aeronaves:

Devuelve todas las aeronaves registradas.

Detección de Colisiones:

Alerta si dos aeronaves están a menos de 500 metros de distancia.

🛠 Instalación y Ejecución
1. Requisitos Previos
Node.js (v18 o superior)

NPM (v9 o superior)

2. Pasos para Configurar el Proyecto
Clonar el Repositorio
bash
git clone https://github.com/tu-usuario/aeropuerto-control.git
cd aeropuerto-control
Instalar Dependencias
bash
npm install
Ejecutar el Servidor
bash
npm run dev
El servidor estará disponible en:
🔗 http://localhost:3000

📡 Endpoints de la API
Método	Endpoint	Descripción	Ejemplo de Body (JSON)
POST	/api/aeronaves	Registra o actualiza una aeronave	{ "id": "ABC123", "x": 100, "y": 200, "z": 300 }
GET	/api/aeronaves	Lista todas las aeronaves registradas	-
🧪 Pruebas en Postman
Se realizaron las siguientes pruebas (ver imagen adjunta):

POST exitoso (201 Created).

GET exitoso (200 OK).

Alerta de colisión (201 Created + mensaje en consola).

Errores de validación:

ID inválido (400 Bad Request).

Coordenadas no numéricas (400 Bad Request).

📂 Estructura del Proyecto
text
src/
├── controllers/       # Lógica de endpoints
├── daos/              # Acceso a datos (memoria)
├── models/            # Modelos de datos
├── routes/            # Definición de rutas
├── services/          # Reglas de negocio
└── app.js             # Configuración del servidor
🚨 Alertas de Colisión
Si dos aeronaves están a menos de 500 metros, se muestra en consola:

bash
⚠️ ALERTA: Posible colisión con aeronaves [ID1, ID2]
La respuesta del endpoint incluye un array alertas (ej: ["Alerta de colisión"]).

