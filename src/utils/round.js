export default function round(value, precision, fixed) {
  const multiplier = 10 ** (precision || 0);
  if (fixed) {
    return (Math.round(value * multiplier) / multiplier)
      .toFixed(1)
      .replace('.', ',');
  }
  return Math.round(value * multiplier) / multiplier;
}
