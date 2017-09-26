/*
Implement factorial.

factorial(5) => 5*4*3*2*1 => 120
*/


function factorial(num){
  if (num === 1){
    return 1;
  }else{
    return num * factorial(num-1);
  }
}

console.log(factorial(5));