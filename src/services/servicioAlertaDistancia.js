const RepositorioAeronave = require('../repositories/repositorioAeronave');

class ServicioAlertaDistancia {
  async verificarRiesgoColision(nuevaAeronave) {
    const aeronaves = await RepositorioAeronave.obtenerTodas();
    const alertas = [];
    
    if (aeronaves.length <= 1) return alertas;

    for (const aeronave of aeronaves) {
      if (aeronave.id === nuevaAeronave.id) continue;
      
      const distancia = this.calcularDistancia(nuevaAeronave, aeronave);
      if (distancia < 500) {
        alertas.push(aeronave.id);
      }
    }

    return alertas;
  }

  calcularDistancia(aeronave1, aeronave2) {
    const dx = aeronave1.x - aeronave2.x;
    const dy = aeronave1.y - aeronave2.y;
    const dz = aeronave1.z - aeronave2.z;
    return Math.sqrt(dx*dx + dy*dy + dz*dz);
  }
}

module.exports = new ServicioAlertaDistancia();