function validarDatosAeronave(datos) {
  // Validar ID: 3 letras + 3 números (ej. ABC123)
  const regexId = /^[A-Za-z]{3}\d{3}$/;
  if (!regexId.test(datos.id)) {
    return { valido: false, mensaje: 'El ID debe tener 3 letras seguidas de 3 números (ej. ABC123)' };
  }

  // Validar coordenadas numéricas
  if (isNaN(datos.x)) return { valido: false, mensaje: 'La coordenada X debe ser un número' };
  if (isNaN(datos.y)) return { valido: false, mensaje: 'La coordenada Y debe ser un número' };
  if (isNaN(datos.z)) return { valido: false, mensaje: 'La coordenada Z debe ser un número' };

  return { valido: true };
}

module.exports = { validarDatosAeronave };