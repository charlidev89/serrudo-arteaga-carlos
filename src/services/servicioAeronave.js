const RepositorioAeronave = require('../repositories/repositorioAeronave');
const { validarDatosAeronave } = require('../utils/validadores');

class ServicioAeronave {
  async crearOActualizarAeronave(datos) {
    const validacion = validarDatosAeronave(datos);
    if (!validacion.valido) {
      throw new Error(validacion.mensaje);
    }
    return RepositorioAeronave.guardar(datos);
  }

  async obtenerTodasLasAeronaves() {
    return RepositorioAeronave.obtenerTodas();
  }
}

module.exports = new ServicioAeronave();