class AeronaveDaoMemoria {
  constructor() {
    this.aeronaves = [];
  }

  async obtenerTodas() {
    return [...this.aeronaves];
  }

  async obtenerPorId(id) {
    return this.aeronaves.find(aeronave => aeronave.id === id);
  }

  async guardar(aeronave) {
    const indiceExistente = this.aeronaves.findIndex(a => a.id === aeronave.id);
    if (indiceExistente >= 0) {
      this.aeronaves[indiceExistente] = aeronave;
    } else {
      this.aeronaves.push(aeronave);
    }
    return aeronave;
  }
}

module.exports = AeronaveDaoMemoria;