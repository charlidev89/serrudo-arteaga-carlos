const ServicioAeronave = require('../services/servicioAeronave');
const ServicioAlertaDistancia = require('../services/servicioAlertaDistancia');

exports.crearAeronave = async (req, res) => {
  try {
    const aeronave = await ServicioAeronave.crearOActualizarAeronave(req.body);
    const alertas = await ServicioAlertaDistancia.verificarRiesgoColision(aeronave);
    
    if (alertas.length > 0) {
      console.log(`⚠️ ALERTA: Posible colisión con aeronaves ${alertas.join(', ')}`);
    }

    res.status(201).json({
      aeronave,
      alertas: alertas.length > 0 ? ['¡Alerta de colisión!'] : []
    });
  } catch (error) {
    res.status(400).json({ error: error.message || 'Datos no válidos' });
  }
};

exports.obtenerTodasLasAeronaves = async (req, res) => {
  try {
    const aeronaves = await ServicioAeronave.obtenerTodasLasAeronaves();
    res.status(200).json(aeronaves);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las aeronaves' });
  }
};