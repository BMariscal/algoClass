/*
BINARY SEARCH ARRAY

*** Description

Given a sorted array and a value, determine if the value is in the array using the binary search (divide and conquer) method.

*** Exercises

Write a function that takes a sorted array and a value and returns the index of the value in the array. Return null if the value is not found in the array. What is the time complexity?

Extra credit: Implement the function both iteratively and recursively.

*/

//iterative implementation:
//O(log n)
function binarySearch(array,value){
  //set high, get low variables
  //set midpoint
  //while loop: while high > low => continue search
  //if midpoint > guess => high = midpoint -1
  //if midpoint < guess => low = midpoint +1
  //if midpoint === guess => return true
  //update midpoint inside while loop as high/low values change
  //while loop will exit when high is less than low and function will return false

  let high = array.length-1;
  let low = 0;
  let midpoint;
  while(high > low){
    midpoint = Math.floor((high + low) /2);
    if(array[midpoint] === value){
      return midpoint;
    }
    else if(array[midpoint] > value){
      high = midpoint -1;

    }
    else if(array[midpoint] < value){
      low = midpoint +1;
    }
  }
  return null;
}
const sortedArr = [0,1,2,3,4,5,6,7,8,9,10];
const result = binarySearch(sortedArr,9);
console.log(result)//9;

//recursive implementation:

var recursiveBinarySearch = function(array, target, min, max) {
  min = min || 0;
  max = max || array.length;
  let midpoint = Math.floor((max + min) /2);

  if(array[midpoint] === target){
    return midpoint;
  }
  if (midpoint === min){
    return null;
  }
  else if(array[midpoint] > target){
    max = midpoint;
  }
  else if(array[midpoint] < target){
    min = midpoint;
  }
  return recursiveBinarySearch(array,target,min, max);
};

const sortedArr2 = [1,2,3,4,5,6,7];
const result2 = recursiveBinarySearch(sortedArr2,6)//5;
console.log(result2);
