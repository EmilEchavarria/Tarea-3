export const numberToWords = (num) => {
  if (num < 0 || num > 1000) return "Número fuera de rango (1-1000)";
  if (num === 1000) return "mil";
  if (num === 0) return "cero";

  const unidades = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
  const especiales = ["diez", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve"];
  const decenas = ["", "diez", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
  const centenas = ["", "ciento", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];

  let words = "";

  // Centenas
  if (Math.floor(num / 100) > 0) {
    if (num === 100) return "cien"; // Special case
    words += centenas[Math.floor(num / 100)] + " ";
    num %= 100;
  }

  // Decenas
  if (num >= 20) {
    words += decenas[Math.floor(num / 10)];
    if (num % 10 > 0) {
      if (num < 30) {
        words = words.replace("veinte", "veinti");
        words += unidades[num % 10];
      } else {
        words += " y " + unidades[num % 10];
      }
    }
  } else if (num >= 10) {
    words += especiales[num - 10];
  } else if (num > 0) {
    words += unidades[num];
  }

  return words.trim();
};
