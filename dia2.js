const lastSafeDownload = 1670000000;
const droneLogs = [
  [42, 1670000500],
  [13, 1670000000],
  [8, 1670000700],
  [8, 1670000001],
  [99, 1669999999],
];

function getCompromisedFiles(lastSafeDownload, droneLogs) {
  // Filtra los logs comprometidos (fecha >= lastSafeDownload)
  const comprometidos = droneLogs
    .filter(([id, log]) => log > lastSafeDownload) 
    .map(([id]) => id); // Obtén solo el id

  // Quita los repetidos usando Set y devuelve un array
  const compromisedFiles = [...new Set(comprometidos)];
  return compromisedFiles.sort()
}

console.log(getCompromisedFiles(lastSafeDownload, droneLogs)); // [42, 8]