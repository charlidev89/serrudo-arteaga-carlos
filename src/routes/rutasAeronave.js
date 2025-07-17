const express = require('express');
const router = express.Router();
const controladorAeronave = require('../controllers/controladorAeronave');

router.post('/', controladorAeronave.crearAeronave);
router.New-Item -Path .gitignore -ItemType Fileet('/', controladorAeronave.obtenerTodasLasAeronaves);

module.exports = router;