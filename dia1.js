const simbolos = [{
    simbolo: '☽',
    valor: 1
  },
  {
    simbolo: '☾',
    valor: 5
  },
  {
    simbolo: '♁',
    valor: 10
  },
  {
    simbolo: '⚕',
    valor: 50
  },
  {
    simbolo: '⚡',
    valor: 100
  },
];

// Creamos un mapa para acceder rápido al valor por símbolo
const mapaValores = Object.fromEntries(simbolos.map(s => [s.simbolo, s.valor]));

function decodeSpell(cadena) {
  let total = 0;
  for (let i = 0; i < cadena.length; i++) {
    const valorActual = mapaValores[cadena[i]];
    const valorSiguiente = mapaValores[cadena[i + 1]];

    if (valorSiguiente && valorActual < valorSiguiente) {
      total -= valorActual; // Se resta si el siguiente es mayor
    } else {
      total += valorActual; // Se suma en los demás casos
    }
  }
  return total;
}

console.log(decodeSpell('☽☾')); // 4 (5-1)