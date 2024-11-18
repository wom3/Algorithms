/**
 * Insertion Sort
 *
 * Pseudocode
 *
 * for j = 2 to A.length
 *      key = A[j]
 *      # Insert A[j] into the sorted sequence A[1..j-1]
 *      i = j - 1
 *      while i > 0 and A[i] > key
 *          A[i+1] = A[i]
 *          i = i - 1
 *      A[i+1]=key
 *
 * Explanation:
 * 1. The outer loop starts from 2 because in many programming languages, arrays are 1-indexed in pseudocode.
 *    The first element (A[1]) is considered already sorted.
 * 2. The variable 'key' is assigned the value of the current element A[j] that needs to be inserted into the sorted sequence.
 * 3. The variable 'i' is initialized to j - 1, which is the index of the last element in the sorted sequence.
 * 4. The while loop shifts elements of the sorted sequence (A[1..j-1]) that are greater than 'key' to the right.
 * 5. The element 'key' is then placed in its correct position in the sorted sequence.
 */

const insert_sort = (arr) => {
  for (let j = 1; j < arr.length; j++) {
    let key = arr[j];
    let i = j - 1;
    while (i >= 0 && arr[i] > key) {
      arr[i + 1] = arr[i];
      i = i - 1;
    }
    arr[i + 1] = key;
  }
  return arr;
};

console.log(insert_sort([5, 4, 3, 2, 1]));
