import { time } from "../tools/clock"
import { randoms } from "../tools/random"
import { merge_sort } from "./merge/index"
import { insertionSort } from "./insertion/index"

const numbers = randoms(5000, 0, 999);


const mergeNumbers = numbers.slice(0, numbers.length);
time(() => {
  merge_sort(mergeNumbers)
}, "Merge Sort")


const insertionNumbers = numbers.slice(0, numbers.length);
time(() => {
  insertionSort(insertionNumbers)
}, "Insertion Sort")
