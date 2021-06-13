/*

  SELECTION SORT

  Input:
  {0} [9, 3, 5, 2, 8, 7, 11, 6, 4, 10]
  
  Steps needed:
  {1} [2, 3, 5, 9, 8, 7, 11, 6, 4, 10]
  {2} [2, 3, 4, 9, 8, 7, 11, 6, 5, 10]
  {3} [2, 3, 4, 5, 8, 7, 11, 6, 9, 10]
  {4} [2, 3, 4, 5, 6, 7, 11, 8, 9, 10]
  {5} [2, 3, 4, 5, 6, 7, 8, 11, 9, 10]
  {6} [2, 3, 4, 5, 6, 7, 8, 9, 11, 10]
  
  Result:
  {8} [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

  Time Complexity:

    Worst case: O(n^2)
    Best case: O(n) - already sorted

*/

const unordered = [9, 3, 5, 2, 8, 7, 11, 6, 4, 10]

const selectionSort = arr => {
  for (let i = 0, n = 0; i < arr.length; i++) {
    let indexOfMin = i
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j
      }
    }
    if (i !== indexOfMin) {
      console.log(`${n > 0 ? `\nstep: ${n}` : `step: ${n}`}\ninput: ${arr.join(', ')}`)
      const temp = arr[indexOfMin]
      arr[indexOfMin] = arr[i]
      arr[i] = temp
      console.log(`output: ${arr.join(', ')}`)
      n++
    }
  }
  return arr
}

console.log(`\nresult: ${selectionSort(unordered)}`)
