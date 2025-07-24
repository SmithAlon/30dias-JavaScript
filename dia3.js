// comparar frases de un estudiante con una base de frases originales
// y detectar plagio si hay coincidencias
// Se normalizan las frases para evitar problemas de formato y puntuación
// Se devuelve un array con las frases sospechosas de plagio

const base = [
  'El conocimiento es poder.',
  'Aprender nunca es una pérdida de tiempo!',
  'Programar es divertido',
]
 
const frasesEstudiante = [
  'el conocimiento es poder',
  ' Aprender nunca es una pérdida de tiempo ',
  'programar es divertido.',
  'La práctica hace al maestro',
]

function detectarPlagio(base, frasesEstudiante) {
  // Función para normalizar: elimina espacios adicionales, signos de puntuación y pasa a minúsculas
  const normalizar = (frase) => {
    return frase
      .toLowerCase()          // Convierte a minúsculas
      .trim()                 // Elimina espacios al inicio y al final
      .replace(/[^\w\sáéíóúüñ]/gi, ''); // Elimina signos de puntuación
  };

  // Normaliza solo la base para comparación
  const baseNormalizado = base.map(normalizar);

  // Filtra las frases originales del estudiante que coinciden normalizadas
  const frasesSospechosas = frasesEstudiante.filter(fraseEstudiante =>
    baseNormalizado.includes(normalizar(fraseEstudiante))
  );

  return frasesSospechosas;
}

console.log(detectarPlagio(base, frasesEstudiante));