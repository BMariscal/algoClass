/*
Implement a function that will reverse a string recursively.

reverse('abcdefg')
=> 'gfedcba'
*/

function reverse(str){
  if(str.length === 1){
    return str;
  }else{
    return str.slice(str.length-1).concat(reverse(str.slice(0,str.length-1)));
  }
}

console.log(reverse('abcdefg'));

