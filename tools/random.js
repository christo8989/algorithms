export const randoms = (length, start, end) => {
  return Array.from({ length }, () => random(start, end));
}

export const random = (start, end) => {
  // TODO: Use the start number as well.
  return Math.floor((Math.random() * (end - start + 0.5)) + start)
}