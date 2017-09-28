//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.

function whileLoop(n){
  while(n >= 0){
    console.log(n--);
  }
}
//whileLoop(7);

//2. Next, try looping just like above except using recursion

function recursiveLoop(n){
  if(n < 0){
    return 0;
  }else{
    console.log(n);
    return recursiveLoop(n-1)
  }
}
//recursiveLoop(7);

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

function exponent(base, expo){
  let count = 0;
  let total = 1;
  while(count++ < expo){
    total*= base;
  }
  return total;
}
//console.log(exponent(4,4));

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

function recursiveExponent(base,expo){
  if(expo === 0) {
    return 1;
  }else{
    return base * recursiveExponent(base, expo-1)
  }
}
//console.log(recursiveExponent(4,5));

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

function recursiveMultiplier(arr,num){
  let newarr = [];
  function map(arr) {
    if (arr.length === 0) {
      return arr;
    } else {
      newarr.unshift(num * arr.slice(arr.length - 1));
      map(arr.slice(0, arr.length - 1));
    }
  }
  map(arr);
  return newarr;
}
console.log(recursiveMultiplier([1,2,3,4], 5));

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse

function recursiveReverse(arr){
  if(arr.length === 1){
    return arr[0];
  }else{
    return arr.slice(arr.length-1).concat(recursiveReverse(arr.slice(0,arr.length-1)));
  }
}

console.log(recursiveReverse([1,2,3,4]));