/*

  BUBBLE SORT

  Input:
  {0} [9, 3, 5, 2, 8, 7, 11, 6, 4, 10]
  
  Steps needed:
  {1} [3, 5, 2, 8, 7, 9, 6, 4, 10, 11]
  {2} [3, 2, 5, 7, 8, 6, 4, 9, 10, 11]
  {3} [2, 3, 5, 7, 6, 4, 8, 9, 10, 11]
  {4} [2, 3, 5, 6, 4, 7, 8, 9, 10, 11]
  {5} [2, 3, 5, 4, 6, 7, 8, 9, 10, 11]
  
  Result:
  {6} [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

  Time Complexity:

    Worst case: O(n^2)
    Best case: O(n) - already sorted

*/

const unordered = [9, 3, 5, 2, 8, 7, 11, 6, 4, 10]

const bubbleSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${i > 0 ? `\nstep: ${i}` : `step: ${i}`}\ninput: ${arr.join(', ')}`)
    for (let n = 0; n < arr.length; n++) {
      if (arr[n] > arr[n + 1]) {
        const temp = arr[n + 1]
        arr[n + 1] = arr[n]
        arr[n] = temp
      }
    }
    console.log(`output: ${arr.join(', ')}`)
  }
  return arr
}

console.log(`\nresult: ${bubbleSort(unordered)}`)
