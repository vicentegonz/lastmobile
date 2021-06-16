/* eslint-disable no-useless-escape */
export function round1(value, precision, fixed) {
  const multiplier = 10 ** (precision || 0);
  if (fixed) {
    return (Math.round(value * multiplier) / multiplier)
      .toFixed(1)
      .replace('.', ',');
  }
  return Math.round(value * multiplier) / multiplier;
}

export function round(value, main) {
  if (main) {
    return value
      .toFixed(1)
      .replace('.', ',')
      .replace(/\d(?=(\d{3})+\,)/g, '$&.');
  }
  return (value * -1)
    .toFixed(1)
    .replace('.', ',')
    .replace(/\d(?=(\d{3})+\,)/g, '$&.');
}
