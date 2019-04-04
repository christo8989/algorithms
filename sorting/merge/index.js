const merge = (array, a, b, c) => {
  const Ln = b - a + 1;
  const L = array.slice(a, a + Ln);
  L[Ln] = Infinity;

  const Rn = c - b;
  const R = array.slice(b + 1, c + 1);
  R[Rn] = Infinity;

  const n = Ln + Rn;

  let l = 0;
  let r = 0;
  for (let k = a; k < (a + n); ++k) {
    const Lv = L[l];
    const Rv = R[r];
    if (Lv <= Rv) {
      array[k] = Lv;
      l = l + 1;
    } else {
      array[k] = Rv;
      r = r + 1;
    }
  }
}

export const merge_sort = (array, a, c) => {
  if (a == null) a = 0;
  if (c == null) c = array.length - 1;

  if (a < c) {
    const b = Math.floor((a + c) / 2);
    merge_sort(array, a, b)
    merge_sort(array, b + 1, c)
    merge(array, a, b, c)
  }
}