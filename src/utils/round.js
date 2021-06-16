/* eslint-disable no-useless-escape */
export default function round(value, main) {
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
