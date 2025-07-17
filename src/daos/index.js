const AeronaveDaoMemoria = require('./AeronaveDaoMemoria');

class FabricaDao {
  static obtenerDao(tipoDao) {
    switch (tipoDao) {
      case 'memoria':
        return new AeronaveDaoMemoria();
      default:
        throw new Error('Tipo de DAO no soportado');
    }
  }
}

module.exports = FabricaDao;