#  **Documentación del Proyecto: Sistema de Control de Aeronaves**  

##  **Descripción**  
Sistema backend para gestión y monitoreo de aeronaves cercanas a una torre de control, con:  
✔ Registro y actualización de posiciones  
✔ Validación de datos en tiempo real  
✔ Detección de colisiones (≤500 metros)  
✔ Persistencia en memoria  

---

##  **Tecnologías Utilizadas**  
| Tecnología | Función |  
|------------|---------|  
| ![Node.js](https://img.shields.io/badge/Node.js-18+-green) | Entorno de ejecución |  
| ![Express](https://img.shields.io/badge/Express-5.x-blue) | Framework para API REST |  
| ![Git](https://img.shields.io/badge/Git-2.40+-orange) | Control de versiones |  

---

##  **Instalación**  
```bash
# 1. Clonar repositorio
git clone https://github.com/charlidev89/serrudo-arteaga-carlos/master.git
cd serrudo-arteaga-carlos

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor
npm run dev
```
El servidor estará disponible en:  
[http://localhost:3000](http://localhost:3000)  

---

## 📡 **Endpoints**  
| Método | Endpoint | Descripción | Ejemplo de Body |  
|--------|----------|-------------|-----------------|  
| `POST` | `/api/aeronaves` | Registra/actualiza aeronave | `{"id":"ABC123", "x":100, "y":200, "z":300}` |  
| `GET` | `/api/aeronaves` | Lista todas las aeronaves | - |  

---

##  **Validaciones**  
```json
// Ejemplo de error (400 Bad Request)
{
  "error": "El ID debe tener 3 letras + 3 números (ej: ABC123)"
}

{
    "error": "La coordenada X debe ser un número"
}
```

##  **Alertas de Colisión**  
```bash
# Mensaje en consola al detectar riesgo
 ALERTA: Posible colisión entre VUELO001 y VUELO002
```

---

##  **Estructura del Proyecto**  
```
src/
├── controllers/       # Lógica de endpoints
├── daos/             # Persistencia en memoria
├── models/           # Modelos de datos
├── routes/           # Definición de rutas
└── services/         # Reglas de negocio
```

---

## 📌 **Pruebas Realizadas**   ://localhost:3000/api/aeronaves
- ✅ Registro exitoso de aeronaves  y get de las aeronaves
<img width="1224" height="839" alt="image" src="https://github.com/user-attachments/assets/0c1118cb-3e61-43ee-ab5f-8fdd0a8eaaec" />
<img width="1227" height="925" alt="image" src="https://github.com/user-attachments/assets/fba6ef81-ae07-4ea8-8e9a-291376a06710" />


- ✅ Detección de colisiones  y actualizacion:
<img width="1235" height="916" alt="image" src="https://github.com/user-attachments/assets/2f2ef883-2f15-4873-8392-31c420ef53a7" />
<img width="1233" height="910" alt="image" src="https://github.com/user-attachments/assets/e4d2166e-0498-47c2-96f0-9e7fc07c21ab" />


- ❌ Pruebas con datos inválidos y coordenadas   
<img width="1218" height="859" alt="image" src="https://github.com/user-attachments/assets/74084d32-e4b7-4ad1-bf0b-b1bf14127a0f" />
<img width="1224" height="904" alt="image" src="https://github.com/user-attachments/assets/d22cf7fe-4b07-4814-873f-c2f3898765b4" />




---

### ✨ **Notas Adicionales**  
- Los datos se pierden al reiniciar el servidor (persistencia en memoria)  
 

