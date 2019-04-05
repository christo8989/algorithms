import { time } from "../tools/clock"
import { randoms } from "../tools/random"
import { merge_sort } from "./merge/index"
import { insertionSort } from "./insertion/index"
import { heap_sort } from "./heap/index"

const numbers = randoms(5000, 0, 999);


const heapNumbers = numbers.slice(0, numbers.length);
time(() => {
  heap_sort(heapNumbers)
}, "Heap Sort")


const mergeNumbers = numbers.slice(0, numbers.length);
time(() => {
  merge_sort(mergeNumbers)
}, "Merge Sort")


const insertionNumbers = numbers.slice(0, numbers.length);
time(() => {
  insertionSort(insertionNumbers)
}, "Insertion Sort")


const javascriptNumbers = numbers.slice(0, numbers.length)
time(() => {
  javascriptNumbers.sort((a, b) => a - b)
}, "Javascript Sort")
