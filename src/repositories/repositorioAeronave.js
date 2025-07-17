const FabricaDao = require('../daos');
const Aeronave = require('../models/Aeronave');

class RepositorioAeronave {
  constructor() {
    this.dao = FabricaDao.obtenerDao('memoria');
  }

  async obtenerTodas() {
    return this.dao.obtenerTodas();
  }

  async obtenerPorId(id) {
    return this.dao.obtenerPorId(id);
  }

  async guardar(datosAeronave) {
    const aeronave = new Aeronave(
      datosAeronave.id,
      datosAeronave.x,
      datosAeronave.y,
      datosAeronave.z
    );
    return this.dao.guardar(aeronave);
  }
}

module.exports = new RepositorioAeronave();