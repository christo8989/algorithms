const left = (index) => (index * 2 + 1)
const right = (index) => (left(index) + 1)
const parent = (index) => (Math.floor(index / 2 - 0.5))

const max_heapify = (arr, i) => {
  let l = left(i)
  let r = right(i)
  let heapLength = arr.heapLength
  let largest = l < heapLength && arr[l] >= arr[i] ? l : i;
  largest = r < heapLength && arr[r] >= arr[largest] ? r : largest;
  if (largest !== i) {
    const iValue = arr[i]
    arr[i] = arr[largest]
    arr[largest] = iValue;
    max_heapify(arr, largest)
  }
}

const build_max_heap = (arr) => {
  const start = Math.floor(((arr.length - 1) / 2) - 0.5)
  for (let i = start; i >= 0; --i) {
    max_heapify(arr, i)
  }
}

export const heap_sort = (arr) => {
  arr.heapLength = arr.length
  build_max_heap(arr)
  for (let i = arr.length - 1; i > 0; --i) {
    const largeValue = arr[0]
    arr[0] = arr[i]
    arr[i] = largeValue
    arr.heapLength = arr.heapLength - 1
    max_heapify(arr, 0)
  }
}
