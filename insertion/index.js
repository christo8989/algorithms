const random = () => { return Math.floor(Math.random() * 999) }
const numbers = Array.from({ length: 100 }, () => random());
console.log(numbers.join(" "));

const insertionSort = (array) => {
  for (let i = 1; i < array.length; ++i) {
    const key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j]
      j = j - 1;
    }
    array[j + 1] = key;
  }
  return array;
}

insertionSort(numbers);
console.log(numbers.join(" "));
