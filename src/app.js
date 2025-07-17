const express = require('express');
const bodyParser = require('body-parser');
const rutasAeronave = require('./routes/rutasAeronave');

const app = express();
const PUERTO = process.env.PUERTO || 3000;

app.use(bodyParser.json());

app.use('/api/aeronaves', rutasAeronave);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(PUERTO, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PUERTO}`);
});