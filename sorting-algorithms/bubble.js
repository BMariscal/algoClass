/*
Bubble SORT

*** Description

Iterate over array, comparing adjacent items and swap if in incorrect order. Largest elements bubble to the end of the array

*** Exercises

- Implement bubble sort
- Identify time complexity

Optimizations:
- Make algorithm adaptive (if at any point array is already sorted, exit function early). After doing this, what is time complexity for nearly sorted arrays?
- For each pass through the array, are you doing any unnecessary checking of elements? Minimize checking and consider the effect on time complexity.

Variants:
- Implement cocktail sort (for each pass find both min and max values and sort in both directions). How does this impact performance?
(https://en.wikipedia.org/wiki/Cocktail_sort)

*/
//O(n^2)
function bubbleSort(array){
  for (let i = array.length-1; i>=0; i--){
    for(let j = 1; j<=i; j++){
      if(array[j-1]>array[j]){
        let temp = array[j-1];
        array[j-1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort([7,5,12,4,3,2,9])); //[2, 3, 4, 5, 7, 9,12]
